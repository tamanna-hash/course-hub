"use client"
import Link from 'next/link';
import React from 'react';

const error = () => {
    return (
       <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center px-4">
      <h1 className="text-error text-6xl font-bold mb-4">Oops!</h1>
      <h2 className="text-neutral text-2xl font-semibold mb-2">
        Something went wrong
      </h2>
      <p className="text-secondary mb-6">
        An unexpected error has occurred. Please try again.
      </p>
      {/* <Link
       href={"/"}
        className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-accent transition"
      >
        Back To Home
      </Link> */}
    </div>
    );
};

export default error;