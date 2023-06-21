import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Patient from "./pages/Patient/Patient";
import patientLoader from "./pages/Patient/Loader";

function App() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
  { index: true, element: <Navigate to="/Login" /> },
  { path: "Login", element: <Login /> },
  { path: "Home", element: <Home /> },
  { path: "Patient/:patientId", element: <Patient />, loader: patientLoader },
]);

export default App;
