// import { NavLink } from "react-router-dom";
import logo from "../images/Component2.png";
import { Link } from "react-scroll";

export const Navigation = () => {
  return (
    <>
      <div id="navDiv">
              <Link
                to="homeContainer"
                className="nav-links"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <img src={logo} alt="homebtn" />
              </Link>
        <nav>
          <ul>
            <li className="nav-item">
              <Link
                to="homeContainer"
                className="nav-links"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                HOME
              </Link>
            </li>    
            <li className="nav-item">
              <Link
                to="aboutContainer"
                className="nav-links"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
              >
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="myProjectsContainer"
                className="nav-links"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
              >
                MY PROJECTS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contactContainer"
                className="nav-links"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

// ______________
// export const Navigation = () => {
//   return (
//     <>
//       <div id="navDiv">
//         <NavLink to={"/"}>
//           <img src={logo} alt="homebtn" />
//         </NavLink>
//         <nav>
//           <ul>
//             <li>
//               {/* <Link to="/" spy={true} smooth= {true} offset= {50} duration={500} >Home</Link> */}
//               <NavLink to={"/"}>Home</NavLink>
//             </li>
//             <li>
//             {/* <Link to={"/About"} spy={true} smooth= {true} offset= {50} duration={500} >About</Link> */}
//               <NavLink to={"/About"}>About</NavLink>
//             </li>
//             <li>
//               <NavLink to={"/Contact"}>Contact</NavLink>
//             </li>
//             <li>
//               <NavLink to={"/MyProjects"}>My Projects</NavLink>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// };
