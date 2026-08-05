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

    setUser

  ] = useState<User | null>(null);

  const [

    role,

    setRole

  ] = useState<string | null>(null);

  const [

    loading,

    setLoading

  ] = useState(true);

  async function loadProfile(

    currentUser: User | null

  ) {    if (!currentUser) {

      setRole(null);

      return;

    }

    const {

      data,

      error,

    } = await supabase

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

        "AUCUN PROFIL TROUVÉ"

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

      } = await supabase.auth.getSession();

      const currentUser =

        data.session?.user ?? null;

      setUser(

        currentUser

      );

      await loadProfile(

        currentUser

      );

      setLoading(false);

    }

    getSession();    const {

      data: listener,

    } = supabase.auth.onAuthStateChange(

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

    } = await supabase.auth.signOut();    if (error) {

      console.error(

        "ERREUR LOGOUT :",

        error

      );

    }

    setUser(null);

    setRole(null);

    setLoading(false);

    window.location.href = "/login";

  }

  return (

    <AuthContext.Provider

      value={{

        user,

        role,

        loading,

        login,

        logout,

      }}

    >

      {children}

    </AuthContext.Provider>

  );

}