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

  login: (
    email: string,
    password: string
  ) => Promise<void>;

  logout: () => Promise<void>;

};


export const AuthContext =
  createContext<AuthContextType>({

    user: null,

    login: async () => {},

    logout: async () => {},

  });



export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {


  const [user, setUser] =
    useState<User | null>(null);  useEffect(() => {

    async function getSession() {

      const {
        data,
      } = await supabase.auth.getSession();


      setUser(
        data.session?.user ?? null
      );

    }


    getSession();


    const {
      data: listener,
    } =
      supabase.auth.onAuthStateChange(
        (_event, session) => {

          setUser(
            session?.user ?? null
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
      await supabase.auth.signInWithPassword({

        email,

        password,

      });


    if (error) {

      throw error;

    }

  }



  async function logout() {

    await supabase.auth.signOut();

  }



  return (

    <AuthContext.Provider

      value={{

        user,

        login,

        logout,

      }}

    >

      {children}

    </AuthContext.Provider>

  );


}