import {
  useContext,
} from "react";

import BottomNavigation from "../components/BottomNavigation";

import {
  AuthContext,
} from "../context/AuthContext";



export default function Profile() {


  const {
    user,
    logout,
  } = useContext(AuthContext);





  async function handleLogout(){


    await logout();


  }






  return (

    <div className="home">


      <h1>
        👤 Profil
      </h1>



      <p>
        Profil utilisateur.
      </p>





      {user && (

        <>

          <p>
            Connecté avec :
            <br />

            <strong>
              {user.email}
            </strong>

          </p>




          <button

            onClick={handleLogout}

            style={{

              marginTop:30,

              padding:"12px 24px",

              borderRadius:12,

              border:"none",

              cursor:"pointer",

              fontSize:16,

            }}

          >

            🚪 Déconnexion

          </button>


        </>

      )}





      <BottomNavigation />


    </div>

  );

}