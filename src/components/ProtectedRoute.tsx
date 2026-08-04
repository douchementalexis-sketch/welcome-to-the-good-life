import {
  Navigate,
} from "react-router-dom";

import {
  useContext,
} from "react";

import type {
  ReactNode,
} from "react";

import {
  AuthContext,
} from "../context/AuthContext";



type Props = {

  children: ReactNode;

};




export default function ProtectedRoute({

  children,

}: Props) {


  const {
    user,
  } = useContext(AuthContext);




  if(!user){


    return (

      <Navigate

        to="/login"

        replace

      />

    );


  }





  return <>{children}</>;

}