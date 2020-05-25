import React from "react";
import { ApolloError } from "apollo-client";

const ErrorAlert = ({
  error,
  className = "",
}: {
  error: Error | ApolloError;
  className?: string;
}) => {
  console.dir(error);
  return (
    <div
      className={`${className} bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative`}
      role="alert"
    >
      <strong className="font-bold mr-1">{"Error"}</strong>
      <span className="block sm:inline">{error.message}</span>
    </div>
  );
};

export default ErrorAlert;
