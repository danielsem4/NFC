import { Navigate, useParams, useRouteError } from "react-router-dom";

interface Error {
  response: {
    status: number;
  };
}

function ErrorBoundary() {
  const error = useRouteError() as Error;
  console.error({ error });
  const params = useParams();

  if (error.response.status === 401 || error.response.status === 403) {
    console.log(params);

    return <Navigate to="/Login" state={params} />;
  }

  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>;
}

export default ErrorBoundary;
