import BottomNavigation from "../components/BottomNavigation";

import "./Home.css";



export default function CoachDashboard() {


  return (


    <div className="home">


      <div className="hero">



        <div
          style={{
            padding:20,
          }}
        >


          <h1
            style={{
              color:"#355F4B",
            }}
          >
            👨‍💻 Bonjour Alexis
          </h1>



          <p
            style={{
              color:"#666",
              fontSize:16,
            }}
          >
            Bienvenue dans ton espace coach 💪
          </p>




          <div
            style={{
              background:"#ffffff",
              borderRadius:20,
              padding:24,
              marginTop:30,
              boxShadow:"0 10px 30px rgba(0,0,0,0.08)",
            }}
          >


            <h2>
              🌸 Mes clientes
            </h2>




            <div
              style={{
                marginTop:20,
                background:"#f4f7f2",
                padding:20,
                borderRadius:16,
              }}
            >


              <h3>
                🌸 Rachel
              </h3>


              <p>
                Statut : Cliente active ✅
              </p>


              <p>
                📊 Suivi nutrition et sport
              </p>



              <button

                style={{

                  marginTop:15,

                  padding:"12px 20px",

                  borderRadius:12,

                  border:"none",

                  background:"#355F4B",

                  color:"#fff",

                  cursor:"pointer",

                  fontSize:15,

                }}

              >

                Voir son suivi

              </button>



            </div>



          </div>





          <div
            style={{
              background:"#ffffff",
              borderRadius:20,
              padding:24,
              marginTop:20,
            }}
          >


            <h2>
              📈 Résumé
            </h2>


            <p>
              Aucun autre client pour le moment.
            </p>


          </div>




        </div>



      </div>



      <BottomNavigation />


    </div>


  );


}