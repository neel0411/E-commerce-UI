import React from "react";
import { Link } from "react-router-dom";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <ExclamationTriangleIcon className="h-16 w-16 text-red-500 mx-auto mb-6" />

        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-2">Oops! Page not found.</p>
        <p className="text-sm text-gray-500 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md text-sm font-medium transition"
        >
          Back to Home
        </Link>
      </div>

      <div className="mt-12">
        <img
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg"
          alt="404 Illustration"
          className="max-w-xs mx-auto"
        />
      </div>
    </div>
  );
};

export default NotFound;
