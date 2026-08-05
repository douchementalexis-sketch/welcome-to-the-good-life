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

  height: number | null;

  currentWeight: number | null;

  goalWeight: number | null;

  loading: boolean;

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

  height: null,

  currentWeight: null,

  goalWeight: null,

  loading: true,

  login: async () => {},

  logout: async () => {},

});

export function AuthProvider({

  children,

}:{

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

  const [

    height,

    setHeight,

  ] = useState<number | null>(null);

  const [

    currentWeight,

    setCurrentWeight,

  ] = useState<number | null>(null);

  const [

    goalWeight,

    setGoalWeight,

  ] = useState<number | null>(null);

  const [

    loading,

    setLoading,

  ] = useState(true);  async function loadProfile(

    currentUser: User | null

  ) {

    console.log("================================");
    console.log("LOAD PROFILE");
    console.log("================================");

    console.log(
      "Utilisateur connecté :",
      currentUser
    );

    if (!currentUser) {

      console.log(
        "Aucun utilisateur."
      );

      setRole(null);
      setHeight(null);
      setCurrentWeight(null);
      setGoalWeight(null);

      return;

    }

    console.log(
      "Recherche profil ID :",
      currentUser.id
    );

    const {

      data,

      error,

    } = await supabase

      .from("profiles")

      .select("*")

      .eq(

        "id",

        currentUser.id

      )

      .maybeSingle();

    console.log(
      "Réponse Supabase :",
      data
    );

    console.log(
      "Erreur Supabase :",
      error
    );

    if (error) {

      console.error(
        "ERREUR PROFIL :",
        error
      );

      setRole(null);
      setHeight(null);
      setCurrentWeight(null);
      setGoalWeight(null);

      return;

    }

    if (!data) {

      console.error(
        "AUCUN PROFIL TROUVÉ"
      );

      setRole(null);
      setHeight(null);
      setCurrentWeight(null);
      setGoalWeight(null);

      return;

    }

    console.log(
      "ROLE :",
      data.role
    );

    console.log(
      "HEIGHT :",
      data.height
    );

    console.log(
      "CURRENT WEIGHT :",
      data.current_weight
    );

    console.log(
      "GOAL WEIGHT :",
      data.goal_weight
    );

    setRole(
      data.role
    );

    setHeight(
      data.height
    );

    setCurrentWeight(
      data.current_weight
    );

    setGoalWeight(
      data.goal_weight
    );

  }  useEffect(() => {

    async function getSession() {

      const {

        data,

      } = await supabase.auth.getSession();

      const currentUser =

        data.session?.user ?? null;

      console.log(
        "SESSION :",
        currentUser
      );

      setUser(

        currentUser

      );

      await loadProfile(

        currentUser

      );

      setLoading(false);

    }

    getSession();

    const {

      data: listener,

    } = supabase.auth.onAuthStateChange(

      async (

        event,

        session

      ) => {

        console.log(
          "AUTH EVENT :",
          event
        );

        const currentUser =

          session?.user ?? null;

        console.log(
          "USER EVENT :",
          currentUser
        );

        setUser(

          currentUser

        );

        await loadProfile(

          currentUser

        );

        setLoading(false);

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

    } = await supabase.auth.signInWithPassword({

      email,

      password,

    });

    if (error) {

      throw error;

    }

  }

  async function logout() {

    const {

      error,

    } = await supabase.auth.signOut();

    if (error) {

      console.error(

        "ERREUR LOGOUT :",

        error

      );

    }

    setUser(null);

    setRole(null);

    setHeight(null);

    setCurrentWeight(null);

    setGoalWeight(null);

    setLoading(false);

    window.location.href = "/login";

  }  return (

    <AuthContext.Provider

      value={{

        user,

        role,

        height,

        currentWeight,

        goalWeight,

        loading,

        login,

        logout,

      }}

    >

      {children}

    </AuthContext.Provider>

  );

}