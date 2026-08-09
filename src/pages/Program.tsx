import BottomNavigation from "../components/BottomNavigation";

import "./Home.css";
import "../styles/Program.css";

export default function Program() {

  return (

    <div className="home">

      <div className="hero">

        <section className="program">

          <div className="programHeader">

            <h1>

              🏋️ Programme de Rachel

            </h1>

            <p>

              Programme personnalisé créé par Loulou 💚

            </p>

            <div className="programSignature">

              💚 Créé avec passion par Loulou.
              Chaque séance est une étape vers la meilleure version de toi-même.

            </div>

          </div>

          <div className="programCard">

            <h2>

              🎯 Objectif

            </h2>

            <strong>

              Perdre 10 kg

            </strong>

          </div>

          <div className="programGrid">

            <div className="programCard">

              <h2>

                📅 Début du programme

              </h2>

              <strong>

                10 août 2026

              </strong>

            </div>

            <div className="programCard">

              <h2>

                ⏳ Durée estimée

              </h2>

              <strong>

                16 semaines

              </strong>

            </div>

          </div>

          <div className="programCard">

            <h2>

              📅 Planning hebdomadaire

            </h2>

            <div className="planningTable">

              <div>🟢 Lundi</div>
              <div>🏋️ Full Body A</div>

              <div>🔵 Mardi</div>
              <div>🚴 Cardio</div>

              <div>🟢 Mercredi</div>
              <div>🏋️ Full Body B</div>

              <div>🌸 Jeudi</div>
              <div>😴 Repos</div>

              <div>🟢 Vendredi</div>
              <div>🏋️ Full Body C</div>

              <div>🔵 Samedi</div>
              <div>🚴 Cardio</div>

              <div>🌸 Dimanche</div>
              <div>😴 Repos</div>

            </div>

          </div>

          <div className="programCard">

            <h2>

              💪 Philosophie du programme

            </h2>

            <p>

              Ce programme est conçu pour favoriser une
              <strong> perte de poids progressive </strong>
              tout en développant la force, en tonifiant le corps et en préservant la masse musculaire.

            </p>

            <p>

              L'objectif n'est pas d'aller le plus vite possible, mais de progresser régulièrement semaine après semaine.

            </p>

          </div>

          <div className="programCard">

            <h2>

              👨‍🏫 Conseil du coach

            </h2>

            <p>

              💚 <strong>Cherche avant tout une exécution parfaite.</strong>

            </p>

            <p>

              Lorsque tu réalises facilement toutes les répétitions demandées avec une bonne technique et sans perdre le contrôle du mouvement, tu peux augmenter légèrement la charge lors de la séance suivante.

            </p>

            <ul>

              <li>✔️ Priorise toujours la qualité du mouvement.</li>

              <li>✔️ Garde 1 à 2 répétitions en réserve sur la plupart des séries.</li>

              <li>✔️ Augmente les charges progressivement (1 à 2 kg lorsque c'est possible).</li>              <li>

                ✔️ Si une charge devient trop lourde et que ta technique se dégrade, diminue légèrement la charge afin de conserver une exécution propre.

              </li>

              <li>

                ✔️ Les sensations sont importantes : une bonne séance n'est pas forcément une séance où tu termines complètement épuisée.

              </li>

              <li>

                ✔️ Sois patiente : les meilleurs résultats viennent de la régularité.

              </li>

            </ul>

            <p>

              💪 N'oublie jamais : chaque répétition bien réalisée est un investissement pour ton futur.

            </p>

          </div>

          <div className="programCard programQuote">

            <h2>

              🌱 À retenir

            </h2>

            <p>

              <strong>

                La régularité bat toujours la perfection.

              </strong>

            </p>

            <p>

              Chaque séance terminée est une victoire.

            </p>

            <p>

              Même les jours de repos font partie de ton entraînement. Ils permettent à ton corps de récupérer, de progresser et de revenir encore plus forte à la séance suivante.

            </p>

          </div>

        </section>

      </div>

      <BottomNavigation />

    </div>

  );

}