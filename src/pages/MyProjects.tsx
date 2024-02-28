
import blomsterhornan from "../images/Screenshot 2024-02-01 194213.png"
import todoList from "../images/TodoList.png"; 
import movieSearch from "../images/MovieSearch.png"; 
import ContactBook from "../images/ContactBook.png"

export const MyProjects = () => {
  return (
    <div className="container" id="myProjectsContainer">
      <h1 id="title">My Projects</h1>
      <h3>
        Here are a few projects I´ve worked on. Intrested in more visit my{" "}
        <a href="https://github.com/SophiaKornilia" target="_blank">
          Github
        </a>
      </h3>
      <section id="linkContainer">
        <ul>
          <li className="project">
            <a href="https://github.com/maijanp/blomsterhornan" target="_blank">
              <img src={blomsterhornan} alt="blomsterhörnan"/>
            </a>
            <div className="projectInfo">
              <h5>Blomsterhörnan</h5>
              <h6>CSS and HTML</h6>
            </div>
          </li>
          <li className="project">
            <a
              href="https://github.com/Medieinstitutet/the-todos-SophiaKornelia"
              target="_blank"
            >
              <img src={todoList} alt="todoList"/>
            </a>
            <div className="projectInfo">
              <h5>Todo</h5>
              <h6>React</h6>
            </div>
          </li >
          <li className="project">
            <a
              href="https://github.com/SophiaKornilia/kunskapskontroll3"
              target="_blank"
            >
              <img src={movieSearch} alt="Movie Search"/>
            </a>
            <div className="projectInfo">
              <h5>Kunskapskontroll 3</h5>
              <h6>Javascrips, HTML and CSS</h6>
            </div>
          </li>
          <li className="project">
            <a
              href="https://github.com/SophiaKornilia/kunskapskontroll2"
              target="_blank"
            >
               <img src={ContactBook} alt="Contact Book"/>
            </a>
            <div className="projectInfo">
              <h5>Kunskapskontroll 2</h5>
              <h6>Javascrips, HTML and CSS</h6>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};
