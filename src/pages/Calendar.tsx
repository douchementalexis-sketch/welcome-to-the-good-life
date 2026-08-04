import {
  useState,
  useEffect,
  useContext,
} from "react";

import BottomNavigation from "../components/BottomNavigation";

import CalendarHeaderPremium from "../components/calendar/CalendarHeaderPremium";
import CalendarGridPremium from "../components/calendar/CalendarGridPremium";
import DayModalPremium from "../components/calendar/DayModalPremium";

import {
  getDaysInMonth,
  getFirstDayOfMonth,
} from "../utils/calendar";

import {
  AppContext,
} from "../context/AppContext";

import "./Home.css";
import "../styles/CalendarPremiumV2.css";



export default function Calendar() {


  const {
    ensureMonthDays,
  } = useContext(AppContext);




  const [
    currentDate,
    setCurrentDate,
  ] = useState(
    new Date()
  );



  const [
    selectedDate,
    setSelectedDate,
  ] = useState<Date | null>(null);




  const year =
    currentDate.getFullYear();


  const month =
    currentDate.getMonth();




  useEffect(() => {


    ensureMonthDays(
      year,
      month
    );


  }, [
    year,
    month,
  ]);





  const days =
    getDaysInMonth(
      year,
      month
    );



  const firstDay =
    getFirstDayOfMonth(
      year,
      month
    );




  const monthName =
    currentDate.toLocaleDateString(
      "fr-FR",
      {
        month:"long",
        year:"numeric",
      }
    );



  const today =
    new Date();





  function previousMonth() {


    setCurrentDate(

      new Date(
        year,
        month - 1,
        1
      )

    );


  }






  function nextMonth() {


    setCurrentDate(

      new Date(
        year,
        month + 1,
        1
      )

    );


  }







  function handleSelectDay(
    day:number
  ) {


    setSelectedDate(

      new Date(
        year,
        month,
        day
      )

    );


  }







  return (

    <div className="home">


      <div className="hero">


        <div className="calendar">



          <CalendarHeaderPremium

            monthName={
              monthName
            }

            previousMonth={
              previousMonth
            }

            nextMonth={
              nextMonth
            }

          />




          <div className="premium-weekdays">


            <span>LUN</span>
            <span>MAR</span>
            <span>MER</span>
            <span>JEU</span>
            <span>VEN</span>
            <span>SAM</span>
            <span>DIM</span>


          </div>





          <CalendarGridPremium

            days={
              days
            }

            firstDay={
              firstDay
            }

            today={
              today
            }

            month={
              month
            }

            year={
              year
            }

            onSelectDay={
              handleSelectDay
            }


          />



        </div>


      </div>





      <DayModalPremium

        date={
          selectedDate
        }

        onClose={() =>
          setSelectedDate(null)
        }

      />



      <BottomNavigation />


    </div>

  );


}