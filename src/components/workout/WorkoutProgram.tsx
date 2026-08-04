import { useContext } from "react";

import "../../styles/WorkoutProgram.css";

import { AppContext } from "../../context/AppContext";
import { getWorkout } from "../../utils/getWorkout";

import ExerciseItem from "./ExerciseItem";


type Props = {
  date: string;
};


export default function WorkoutProgram({
  date,
}: Props) {


  const workout = getWorkout(date);


  const {
    days,
    updateDay,
  } = useContext(AppContext);



  const current =
    days.find(
      (d) => d.date === date
    );



  const completed =
    current?.completedExercises ?? [];



  console.log(
    "EXERCICES TERMINE :",
    completed.length
  );



  function toggleExercise(
    exercise: string
  ) {


    const exists =
      completed.includes(exercise);



    const newCompleted = exists

      ? completed.filter(
          (item) => item !== exercise
        )

      : [
          ...completed,
          exercise
        ];



    updateDay(date, {

      completedExercises:
        newCompleted,

      workoutDone:
        newCompleted.length ===
        workout.exercises.length,

    });


  }



  const percent = Math.round(

    (completed.length /
      workout.exercises.length) *

      100

  );



  return (

    <div className="program-card">


      <h3>

        {workout.icon} {workout.title}

      </h3>



      <div className="progress">


        <div className="progress-header">


          <span>
            Progression
          </span>


          <span>
            {completed.length} / {workout.exercises.length}
          </span>


        </div>



        <div className="progress-bar">


          <div

            className="progress-fill"

            style={{
              width: `${percent}%`,
            }}

          />


        </div>


      </div>




      <div className="program-list">


        {workout.exercises.map(

          (exercise) => (


            <ExerciseItem

              key={exercise}

              exercise={exercise}

              checked={
                completed.includes(
                  exercise
                )
              }

              onToggle={() =>
                toggleExercise(
                  exercise
                )
              }

            />


          )

        )}


      </div>


    </div>

  );

}