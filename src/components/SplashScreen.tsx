import "./SplashScreen.css";
import { useEffect, useState } from "react";

import soleil from "../assets/logo/soleil.svg";
import feuille from "../assets/logo/feuille.svg";
import coeur from "../assets/logo/coeur.svg";
import sparkles from "../assets/logo/sparkles.svg";
import ground from "../assets/logo/ground.svg";

type Props = {
  children: React.ReactNode;
};

export default function SplashScreen({
  children,
}: Props) {

  const [showSplash, setShowSplash] = useState(true);

  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {

    const fade = setTimeout(() => {

      setFadeOut(true);

    }, 4300);

    const end = setTimeout(() => {

      setShowSplash(false);

    }, 5000);

    return () => {

      clearTimeout(fade);

      clearTimeout(end);

    };

  }, []);

  if (!showSplash) {

    return (

      <div className="app-fade">

        {children}

      </div>

    );

  }

  return (

    <div className={`splash-screen ${fadeOut ? "fade-out" : ""}`}>

      <div className="background-light"/>

      <div className="logo-animation">

        <img
          src={soleil}
          className="sun"
          alt=""
        />

        <img
          src={feuille}
          className="leaf"
          alt=""
        />

        <img
          src={coeur}
          className="heart"
          alt=""
        />

        <img
          src={sparkles}
          className="sparkles"
          alt=""
        />

        <img
          src={ground}
          className="ground"
          alt=""
        />

      </div>

      <h1 className="brand-name">

        Welcome To The Good Life

      </h1>

      <p className="brand-subtitle">

        Prends soin de toi aujourd'hui 🌸

      </p>

    </div>

  );

}