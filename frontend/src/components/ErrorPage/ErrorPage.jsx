import React from "react";
import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="flex flex-col gap-12 items-center justify-center h-screen">
      <h1 className="text-6xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
