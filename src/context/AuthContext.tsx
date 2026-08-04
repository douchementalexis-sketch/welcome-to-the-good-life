import {
  createContext,
  useEffect,
  useState,
} from "react";

import type {
  ReactNode,
} from "react";

import type {
  User,
} from "@supabase/supabase-js";

import {
  supabase,
} from "../lib/supabase";



type AuthContextType = {

  user: User | null;

  role: string | null;

  login: (
    email: string,
    password: string
  ) => Promise<void>;

  logout: () => Promise<void>;

};





export const AuthContext =
  createContext<AuthContextType>({

    user: null,

    role: null,

    login: async () => {},

    logout: async () => {},

  });







export function AuthProvider({

  children,

}: {

  children: ReactNode;

}) {



  const [
    user,
    setUser,
  ] = useState<User | null>(null);




  const [
    role,
    setRole,
  ] = useState<string | null>(null);








  async function loadProfile(

    currentUser: User | null

  ) {



    if (!currentUser) {

      setRole(null);

      return;

    }





    const {
      data,
      error,
    } =
      await supabase
        .from("profiles")
        .select("role")
        .eq(
          "id",
          currentUser.id
        )
        .maybeSingle();






    if (error) {

      console.error(
        "ERREUR PROFIL :",
        error
      );

      setRole(null);

      return;

    }





    if (!data) {

      console.error(
        "AUCUN PROFIL TROUVE POUR :",
        currentUser.id
      );

      setRole(null);

      return;

    }





    console.log(
      "ROLE UTILISATEUR :",
      data.role
    );



    setRole(
      data.role
    );


  }









  useEffect(() => {



    async function getSession() {



      const {
        data,
      } =
        await supabase.auth.getSession();




      const currentUser =
        data.session?.user ?? null;




      setUser(
        currentUser
      );




      await loadProfile(
        currentUser
      );


    }






    getSession();







    const {
      data: listener,
    } =
      supabase.auth.onAuthStateChange(


        async (
          _event,
          session
        ) => {



          const currentUser =
            session?.user ?? null;




          setUser(
            currentUser
          );




          await loadProfile(
            currentUser
          );



        }



      );






    return () => {


      listener.subscription.unsubscribe();


    };



  }, []);









  async function login(

    email: string,

    password: string

  ) {



    const {
      error,
    } =
      await supabase.auth
        .signInWithPassword({

          email,

          password,

        });





    if (error) {

      throw error;

    }


  }








  async function logout() {


    await supabase.auth.signOut();


    setUser(null);

    setRole(null);


  }









  return (


    <AuthContext.Provider


      value={{


        user,

        role,

        login,

        logout,


      }}


    >


      {children}


    </AuthContext.Provider>


  );


}