import "./HomeHero.css";

import heroBg from "../../assets/hero/hero-bg.png";
import clouds from "../../assets/hero/clouds.png";
import flowersLeft from "../../assets/hero/flowers-left.png";
import flowersRight from "../../assets/hero/flowers-right.png";
import sparkles from "../../assets/hero/sparkles.png";
import avatarRachel from "../../assets/hero/avatar-rachel.png";

export default function HomeHero() {

  return (

    <section className="homeHero">

      <img
        src={heroBg}
        alt=""
        className="heroBg"
      />

      <img
        src={clouds}
        alt=""
        className="heroClouds"
      />

      <img
        src={flowersLeft}
        alt=""
        className="heroFlowersLeft"
      />

      <img
        src={flowersRight}
        alt=""
        className="heroFlowersRight"
      />

      <img
        src={sparkles}
        alt=""
        className="heroSparkles"
      />

      <div className="heroContent">

        <div className="heroTop">

          <img
            src={avatarRachel}
            alt="Rachel"
            className="heroAvatar"
          />

          <div>

            <span className="heroHello">

              Bonjour

            </span>

            <h1>

              Rachel 🌸

            </h1>

          </div>

        </div>

        <div className="heroBottom">

          <h2>

            Aujourd'hui

          </h2>

          <p>

            Chaque petite victoire compte

          </p>

        </div>

        <div className="heroHeart">

          ❤️

        </div>

      </div>

    </section>

  );

}