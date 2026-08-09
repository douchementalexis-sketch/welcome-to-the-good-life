import {

  useContext,

} from "react";

import BottomNavigation from "../components/BottomNavigation";

import {

  AuthContext,

} from "../context/AuthContext";

import {

  AppContext,

} from "../context/AppContext";

import WeightSummary from "../components/profile/WeightSummary";

import WeightInput from "../components/profile/WeightInput";

import WeightHistory from "../components/profile/WeightHistory";

import WeightChart from "../components/charts/WeightChart";

import "./Home.css";

import "../styles/Profile.css";

export default function Profile() {

  const {

    user,

    logout,

  } = useContext(

    AuthContext

  );

  const {

    weights,

    addWeight,

    updateWeight,

    deleteWeight,

  } = useContext(

    AppContext

  );

  async function handleLogout(){

    await logout();

  }

  return(

    <div className="home">

      <div className="hero">

        <section className="profile">

          <div className="profileHeader">

            <h1>

              👤 Profil Rachel

            </h1>

            <p>

              Ton espace personnel 💚

            </p>

          </div>

          <div className="profileCard">

            <h2>

              📧 Mon compte

            </h2>

            <div className="profileInfo">

              <div className="profileInfoRow">

                <span className="profileLabel">

                  Adresse e-mail

                </span>

                <span className="profileData">

                  {user?.email}

                </span>

              </div>

              <div className="profileInfoRow">

                <span className="profileLabel">

                  Statut

                </span>

                <span className="profileData">

                  Cliente active 💚

                </span>

              </div>

            </div>

          </div>

          <div className="profileCard">

            <h2>

              🌱 Mon évolution

            </h2>

            <WeightSummary

              weights={weights}

            />            <WeightInput

              addWeight={addWeight}

            />

            <WeightHistory

              weights={weights}

              updateWeight={updateWeight}

              deleteWeight={deleteWeight}

            />

            <hr className="profileSeparator" />

            <h3>

              📈 Evolution du poids

            </h3>

            <WeightChart

              weights={weights}

            />

          </div>

          <div className="profileCard">

            <h2>

              📷 Photo d'évolution

            </h2>

            <p>

              Aucune photo enregistrée.

            </p>

            <button

              className="profileButton"

            >

              📷 Ajouter une photo

            </button>

          </div>          <div className="profileCard">

            <h2>

              🚪 Déconnexion

            </h2>

            <button

              className="profileButton"

              onClick={handleLogout}

            >

              Se déconnecter

            </button>

          </div>

        </section>

      </div>

      <BottomNavigation />

    </div>

  );

}