"use client";
import React from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import SocialButtons from "../buttons/SocialButtons";
import { postUser } from "@/app/actions/server/auth";

const RegisterForm = () => {
    const router = useRouter()
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/";
  console.log(params, callbackUrl);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await postUser(form);
    if (result.acknowledged) {
      const result = await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect:false,
        callbackUrl: callbackUrl,
      });
      if (result.ok) {
        router.push(callbackUrl)
        Swal.fire("success", "Welcome to CourseHub", "success");
      } else {
        Swal.fire("error", "Sorry Error Occurred", "error");
      }
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md bg-base-100 rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center text-neutral mb-2">
          Create Your Account 🚀
        </h1>
        <p className="text-center text-secondary mb-6">
          Join EduPlatform and start learning today
        </p>

        {/* Google Register */}
        <SocialButtons />

        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-base-300" />
          <span className="text-sm text-secondary">or</span>
          <div className="flex-1 h-px bg-base-300" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-neutral mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-2 border border-base-300 rounded-lg bg-base-100 text-neutral focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-base-300 rounded-lg bg-base-100 text-neutral focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-base-300 rounded-lg bg-base-100 text-neutral focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-full bg-primary text-white font-semibold hover:bg-accent transition"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center text-secondary mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-primary font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
