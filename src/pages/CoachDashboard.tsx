import {
  useContext,
} from "react";


import {
  AuthContext,
} from "../context/AuthContext";



export default function CoachDashboard() {



  const {
    logout,
  } = useContext(AuthContext);





  async function handleLogout(){


    await logout();


  }







  return (


    <div

      style={{

        minHeight:"100vh",

        padding:"30px",

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

          padding:"25px",

          borderRadius:"20px",

          marginTop:"30px",

        }}

      >



        <h2>

          🌸 Mes clientes

        </h2>





        <div

          style={{

            background:"#f4f7f2",

            padding:"20px",

            borderRadius:"15px",

            marginTop:"20px",

          }}

        >


          <h3>

            🌸 Rachel

          </h3>



          <p>

            Cliente active ✅

          </p>




          <button

            style={{

              padding:"12px 20px",

              borderRadius:"12px",

              border:"none",

              background:"#355F4B",

              color:"white",

            }}

          >

            Voir son suivi

          </button>



        </div>



      </div>






      <button

        onClick={handleLogout}

        style={{

          marginTop:"40px",

          padding:"14px 25px",

          borderRadius:"12px",

          border:"none",

          background:"#b23b3b",

          color:"white",

          fontSize:"16px",

          cursor:"pointer",

        }}

      >

        🚪 Déconnexion

      </button>





    </div>


  );

}