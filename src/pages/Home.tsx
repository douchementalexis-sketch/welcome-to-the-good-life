import "./Home.css";

import Header from "../components/Header";
import Card from "../components/Card";
import Stats from "../components/Stats";
import Planning from "../components/Planning";
import Hydration from "../components/Hydration";
import Mood from "../components/Mood";
import Notes from "../components/Notes";
import BottomNavigation from "../components/BottomNavigation";

import TodayWorkout from "../components/home/TodayWorkout";


export default function Home() {


  return (


    <div className="home">


      <div className="hero">



        <Header />



        <Stats />





        <Card title="🌸 Bonjour Rachel">


          <div

            style={{

              textAlign:"center",

              marginBottom:24,

            }}

          >



            <h2

              style={{

                margin:0,

                color:"#355F4B",

                fontSize:30,

              }}

            >

              Aujourd'hui

            </h2>




            <p

              style={{

                marginTop:8,

                color:"#666",

                fontSize:16,

              }}

            >

              Chaque petite victoire compte 💚

            </p>




          </div>




          <TodayWorkout />



        </Card>







        <Card title="📅 Planning de la semaine">


          <Planning />


        </Card>







        <div

          style={{

            display:"grid",

            gridTemplateColumns:"1fr 1fr",

            gap:24,

            marginBottom:24,

          }}

        >





          <Card title="💧 Hydratation">


            <Hydration />


          </Card>





          <Card title="😊 Humeur">


            <Mood />


          </Card>





        </div>







        <Card title="📝 Notes du jour">


          <Notes />


        </Card>





      </div>






      <BottomNavigation />



    </div>


  );


}