import portfolioPhoto from "../images/portfolioPicture.png";
import { About } from "./About";
import { Contact } from "./Contact";
import { MyProjects } from "./MyProjects";


export const Home = () => {
  return (
    <div id="homeContainer" >
    <div id="homeDiv">
      <img src={portfolioPhoto} alt="Profilepicture" />
      <div>
        <h1>Hi! I´m Kornilia</h1>
        <h2>I´m a fullstack developer</h2>
      </div>
    </div>
    <div>
        <About /> 
    </div>
    <div>
        <MyProjects/>
    </div>
    <div>
        <Contact /> 
    </div>
    </div>
  );
};
