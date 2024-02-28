import portfolioPhoto from "../images/portfolioPicture.png";
import { About } from "./About";

export const Home = () => {
  return (
    <>
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
    </>
  );
};
