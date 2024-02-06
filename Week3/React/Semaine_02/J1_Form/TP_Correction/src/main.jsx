import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import App from "./App";
import Contact from "./Pages/Contact";
import Layout from "./components/Layout";
import Blog from "./Pages/Blog";
import UserList from "./Pages/UserList";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import User from "./Pages/User";

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
  createRoute("/contact", <Contact />),
  createRoute("/blog", <Blog />),
  createRoute("/users/*", <UserList />),
  createRoute("/user/:userId", <User />),
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
