import React from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/numberCalcul">Form Calcum</Link>
          </li>
          <li>
            <Link to="/numberCalculReducer">Form Calcul Reducer</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
