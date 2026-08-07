import "../styles/Sleep.css";

export default function Sleep() {

  return (

    <div className="sleep">

      <div className="sleepIcon">

        🌙

      </div>

      <div className="sleepValue">

        8 h

      </div>

      <div className="sleepLabel">

        Sommeil

      </div>

      <div className="sleepBar">

        <div
          className="sleepProgress"
          style={{
            width:"80%",
          }}
        />

      </div>

    </div>

  );

}