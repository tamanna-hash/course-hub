"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

const EnrollButton = ({ course }) => {
  const [isBooked, setIsBooked] = useState(false);
  const router = useRouter();
  const path = usePathname();
  const isLogin = true;
  const handleEnroll = () => {
    if (isLogin) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, book it!",
      }).then((result) => {
        if (result.isConfirmed) {
          setIsBooked(true);
          Swal.fire({
            title: "booked!",
            text: "Your course has been booked.",
            icon: "success",
          });
        }
      });
    } else {
      router.push(`/login?callbackUrl=${path}`);
    }
  };
  // onClick={handleEnroll}
  return (
    <button
    disabled={isBooked}
      onClick={handleEnroll}
      className={`w-full py-3 ${isBooked ? "bg-gray-400" : "bg-sky-400 hover:bg-accent"} rounded-full x text-white font-semibold  transition`}
    >
      Enroll Now
    </button>
  );
};

export default EnrollButton;
