import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Patient from "./pages/Patient/Patient";
import Home from "./pages/Home/Home";
import patientLoader from "./pages/Patient/Loader";
import ErrorBoundary from "./pages/Patient/Error";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

const router = createBrowserRouter([
  { index: true, element: <Navigate to="/Login" /> },
  { path: "Login", element: <Login /> },
  { path: "Home", element: <Home /> },
  {
    path: "Patient/:patientId",
    element: <Patient />,
    loader: patientLoader,
    errorElement: <ErrorBoundary />,
  },
]);

export default App;
