"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const SocialButtons = () => {
  const params = useSearchParams();
  const handleSignIn = async () => {
    const result = await signIn("google", {
    //   redirect: false,
      callbackUrl: params.get("callbackUrl") || "/",
    });
    if (result.ok) {
      Swal.fire("success", "Welcome to CourseHub", "success");
    } else {
      Swal.fire("error", "Sorry Error Occurred", "error");
    }
  };
  return (
    <div>
      <button
        onClick={handleSignIn}
        className="w-full flex items-center justify-center gap-3 py-2.5 mb-5 rounded-full border border-base-300 bg-base-100 hover:bg-base-200 transition"
      >
        <FcGoogle className="text-xl" />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialButtons;
