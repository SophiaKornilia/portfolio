import { NavLink } from "react-router-dom";
import logo from "../images/Component2.png";


export const Navigation = () => {
  return (
    <>
      <div id="navDiv">
        <NavLink to={"/"}>
          <img src={logo} alt="homebtn" />
        </NavLink>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/About"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/Contact"}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={"/MyProjects"}>My Projects</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
