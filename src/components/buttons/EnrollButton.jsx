"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

const EnrollButton = ({ course }) => {
  const router = useRouter();
  const path = usePathname();
  const isLogin = false;
  const handleEnroll = () => {
    if (isLogin) {
      alert(course._id);
    } else {
      router.push(`/login?callbackUrl=${path}`);
    }
  };
  return (
    <button onClick={handleEnroll} className="w-full py-3 rounded-full bg-primary text-white font-semibold hover:bg-accent transition">
      Enroll Now
    </button>
  );
};

export default EnrollButton;
