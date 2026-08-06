import "./SplashScreen.css";
import { useEffect, useState } from "react";

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

    }, 4500);

    const end = setTimeout(() => {

      setShowSplash(false);

    }, 5200);

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

      <div className="background-light" />

      <div className="logo-wrapper">

        <img
          src="/logo.png"
          alt="Welcome To The Good Life"
          className="logo-image"
        />

        <div className="logo-shine"></div>

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