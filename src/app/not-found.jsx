import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center px-4">
      <h1 className="text-primary text-6xl font-bold mb-4">
        404
      </h1>
      <h2 className="text-neutral text-2xl font-semibold mb-2">
        Page Not Found
      </h2>
      <p className="text-secondary mb-6">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-accent transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
