"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const AuthButtons = () => {
  const session = useSession();
  return (
    <div className="flex items-center gap-3">
      {session.status === "authenticated" ? (
        <>
          <button
            onClick={() => signOut()}
            className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Log Out
          </button>
        </>
      ) : (
        <>
          <Link 
            href={"/login"} 
            className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Sign In
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthButtons;
