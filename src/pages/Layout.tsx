// import { Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation";

import "../styles/main.scss";
// import { Home } from "./Home";

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation /> 
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
