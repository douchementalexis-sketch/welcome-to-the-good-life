import {
  useEffect,
  useState,
  useContext,
} from "react";

import type {
  ReactNode,
} from "react";

import type {
  DayData,
} from "../types/DayData";

import {
  AppContext,
} from "./AppContext";

import {
  AuthContext,
} from "./AuthContext";

import {
  supabase,
} from "../lib/supabase";

export default function AppProvider({

  children,

}: {

  children: ReactNode;

}) {

  const {
    user,
  } = useContext(AuthContext);

  const [
    days,
    setDays,
  ] = useState<DayData[]>([]);

  async function loadDays(){

    if(!user) return;

    const {
      data,
      error,
    } =
      await supabase
        .from("days")
        .select("*")
        .eq(
          "user_id",
          user.id
        )
        .order(
          "date",
          {
            ascending:true,
          }
        );

    if(error){

      console.error(
        "ERREUR CHARGEMENT DAYS :",
        error
      );

      return;

    }

    const formatted:DayData[] =
      (data ?? []).map(
        (day)=>({

          id:
            day.id,

          date:
            day.date,

          water:
            day.water ?? 0,

          mood:
            day.mood ?? 2,

          workoutDone:
            day.workout_done ?? false,

          dayValidated:
            day.day_validated ?? false,

          notes:
            day.notes ?? "",

          completedExercises:
            day.completed_exercises ?? [],

        })
      );

    setDays(
      formatted
    );

  }  async function ensureMonthDays(

    year:number,

    month:number

  ){

    if(!user) return;

    const totalDays =
      new Date(
        year,
        month + 1,
        0
      ).getDate();

    const rows:any[] = [];

    for(
      let i = 1;
      i <= totalDays;
      i++
    ){

      const date =
        `${year}-${String(month+1).padStart(2,"0")}-${String(i).padStart(2,"0")}`;

      const exists =
        days.some(
          (day)=>
            day.date === date
        );

      if(!exists){

        rows.push({

          id:
            crypto.randomUUID(),

          user_id:
            user.id,

          date,

          water:0,

          mood:2,

          workout_done:false,

          day_validated:false,

          notes:"",

          completed_exercises:[],

        });

      }

    }

    if(rows.length){

      const {
        error,
      } =
        await supabase
          .from("days")
          .insert(
            rows
          );

      if(error){

        console.error(
          "ERREUR CREATION MOIS :",
          error
        );

        return;

      }

      await loadDays();

    }

  }  async function updateDay(

    date:string,

    updates:Partial<DayData>

  ){

    if(!user) return;

    const existing =
      days.find(
        (day)=>
          day.date === date
      );

    const row = {

      id:

        existing?.id ??

        crypto.randomUUID(),

      user_id:

        user.id,

      date,

      water:

        updates.water ??

        existing?.water ??

        0,

      mood:

        updates.mood ??

        existing?.mood ??

        2,

      workout_done:

        updates.workoutDone ??

        existing?.workoutDone ??

        false,

      day_validated:

        updates.dayValidated ??

        existing?.dayValidated ??

        false,

      notes:

        updates.notes ??

        existing?.notes ??

        "",

      completed_exercises:

        updates.completedExercises ??

        existing?.completedExercises ??

        [],

    };

    const {

      data,

      error,

    } =

      await supabase
        .from("days")
        .upsert(

          row,

          {

            onConflict:

              "user_id,date",

          }

        )
        .select()
        .single();    if(error){

      console.error(

        "ERREUR UPDATE DAY :",

        error

      );

      return;

    }

    const updatedDay:DayData = {

      id:
        data.id,

      date:
        data.date,

      water:
        data.water ?? 0,

      mood:
        data.mood ?? 2,

      workoutDone:
        data.workout_done ?? false,

      dayValidated:
        data.day_validated ?? false,

      notes:
        data.notes ?? "",

      completedExercises:
        data.completed_exercises ?? [],

    };

    setDays(

      previous => {

        const exists =

          previous.some(

            (day)=>

              day.date === date

          );

        if(exists){

          return previous.map(

            (day)=>

              day.date === date

              ?

              updatedDay

              :

              day

          );

        }

        return [

          ...previous,

          updatedDay,

        ];

      }

    );

  }

  useEffect(()=>{

    if(user){

      loadDays();

    }

  },[user]);

  return (

    <AppContext.Provider

      value={{

        days,

        updateDay,

        ensureMonthDays,

      }}

    >

      {children}

    </AppContext.Provider>

  );

}