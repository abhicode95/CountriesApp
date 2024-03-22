import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  const error = useRouteError();
  return <div>Something went wrong{error.statusText || error.message}</div>;
};

export default ErrorBoundary;
