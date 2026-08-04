import {
  useState,
  useContext,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  AuthContext,
} from "../context/AuthContext";


export default function Login() {


  const {
    login,
  } = useContext(AuthContext);


  const navigate =
    useNavigate();


  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");



  async function handleLogin(
    e: React.FormEvent
  ) {

    e.preventDefault();


    try {

      setError("");


      await login(
        email,
        password
      );


      navigate("/");


    } catch {

      setError(
        "Email ou mot de passe incorrect"
      );

    }

  }



  return (

    <div
      style={{
        minHeight:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:20,
      }}
    >

      <form
        onSubmit={handleLogin}
        style={{
          width:"100%",
          maxWidth:400,
          display:"flex",
          flexDirection:"column",
          gap:15,
        }}
      >

        <h1>
          Welcome To The Good Life
        </h1>


        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>
            setEmail(e.target.value)
          }
        />


        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e)=>
            setPassword(e.target.value)
          }
        />


        {error && (

          <p>
            {error}
          </p>

        )}


        <button
          type="submit"
        >

          Se connecter

        </button>


      </form>


    </div>

  );

}