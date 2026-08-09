import {
  useContext,
} from "react";

import BottomNavigation from "../components/BottomNavigation";

import {
  AuthContext,
} from "../context/AuthContext";

import "./Home.css";
import "../styles/Profile.css";

export default function Profile() {

  const {
    user,
    logout,
  } = useContext(AuthContext);

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

          </div>          <div className="profileCard">

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

            <div className="evolutionGrid">

              <div className="evolutionBox">

                <span>

                  ⚖️ Poids actuel

                </span>

                <strong>

                  -- kg

                </strong>

              </div>

              <div className="evolutionBox">

                <span>

                  🎯 Objectif

                </span>

                <strong>

                  55 kg

                </strong>

              </div>

              <div className="evolutionBox">

                <span>

                  📅 Dernière pesée

                </span>

                <strong>

                  Aucune

                </strong>

              </div>

              <div className="evolutionBox">

                <span>

                  ⏳ Prochaine pesée

                </span>

                <strong>

                  Disponible

                </strong>

              </div>

            </div>

            <button

              className="profileButton"

            >

              ⚖️ Mettre à jour mon poids

            </button>

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

          </div>

          <div className="profileCard">

            <h2>

              🚪 Déconnexion

            </h2>

            <button

              className="profileButton"

              onClick={handleLogout}

            >

              Se déconnecter

            </button>

          </div>        </section>

      </div>

      <BottomNavigation />

    </div>

  );

}