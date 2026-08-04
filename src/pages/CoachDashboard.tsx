import {
  useContext,
} from "react";


import {
  useNavigate,
} from "react-router-dom";


import {
  AuthContext,
} from "../context/AuthContext";





export default function CoachDashboard(){



  const navigate =
    useNavigate();



  const {
    logout,
  } =
    useContext(AuthContext);





  return (


    <div

      style={{

        minHeight:"100vh",

        padding:30,

        background:"#f7f7f2",

      }}

    >



      <h1

        style={{

          color:"#355F4B",

        }}

      >

        👨‍💻 Bonjour Alexis

      </h1>




      <p>

        Bienvenue dans ton espace coach 💪

      </p>






      <div

        style={{

          background:"#fff",

          padding:25,

          borderRadius:20,

          marginTop:30,

        }}

      >



        <h2>

          🌸 Mes clientes

        </h2>





        <div

          style={{

            background:"#f4f7f2",

            padding:20,

            borderRadius:15,

            marginTop:20,

          }}

        >



          <h3>

            🌸 Rachel

          </h3>



          <p>

            Cliente active ✅

          </p>





          <button

            onClick={() =>
              navigate(
                "/client-followup"
              )
            }


            style={{

              padding:"12px 20px",

              borderRadius:12,

              border:"none",

              background:"#355F4B",

              color:"white",

              cursor:"pointer",

            }}

          >

            Voir son suivi

          </button>



        </div>



      </div>







      <button

        onClick={logout}


        style={{

          marginTop:40,

          padding:"14px 25px",

          borderRadius:12,

          border:"none",

          background:"#b23b3b",

          color:"white",

        }}

      >

        🚪 Déconnexion

      </button>



    </div>


  );


}