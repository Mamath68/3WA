import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Layout from "./components/Layout";
import App from "./App";
import About from "./Pages/About";
import Calculator from "./components/calculator";
import Calendrier from "./components/Calendrier";

const createRoute = (path, component, errorElement) => ({
  path,
  element: (
    <Layout>
      <Routes>
        <Route index element={React.cloneElement(component)} />
      </Routes>
    </Layout>
  ),
});

const router = createBrowserRouter([
  createRoute("/", <App />),
  createRoute("/about", <About />),
  createRoute("/calculatrice", <Calculator />),
  createRoute("/calendrier", <Calendrier />),
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
