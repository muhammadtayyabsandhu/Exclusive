import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      {/* Breadcrumb */}
      <div className="mb-4 text-sm text-gray-500">
        Home <span className="mx-2">/</span> 
        <span >404 Error</span>
      </div>

      {/* 404 Heading */}
      <h1 className="text-5xl md:text-6xl font-bold mb-2">404 Not Found</h1>

      {/* Description */}
      <p className="text-gray-600 mb-6">
        Your visited page not found. You may go home page.
      </p>

      {/* Back to Home Button */}
      

<Link
  to="/"
  className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-colors"
>
  Back to home page
</Link>





    </div>
  );
};

export default PageNotFound;
