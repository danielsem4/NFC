import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Patient from "./pages/Patient/Patient";
import Home from "./pages/Home/Home";
import axios from "axios";
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
    loader: async ({ params }) => {
      const { patientId } = params;
      const res = await axios.get(`/api/patients/${patientId}`);
      return res.data;
    },
    errorElement: <ErrorBoundary />,
  },
]);

export default App;
