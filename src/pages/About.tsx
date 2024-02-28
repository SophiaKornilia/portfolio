import portfolioPhoto from "../images/portfolioPicture.png";

export const About = () => {
  return (
    <div id="aboutContainer" >
      <img id="portfolioImg" src={portfolioPhoto} alt="Profilepicture" />
      <div>
        <h1>About</h1>
        <p id="textContainer">
          Welcome to my corner of the web! <br />
          <br />
          I'm Kornilia, a dedicated fullstack development student at
          Medieinstitutet. My journey into the coding realm has equipped me with
          a dynamic blend of teaching experience and technical prowess. With a
          background in education, I've gained valuable insights into diverse
          needs and challenges within the sector. My technical toolkit includes
          proficiency in HTML, CSS, JavaScript, React, Node, WordPress,
          WooCommerce, Git, Parprogramming, PHP, Agile methods, SQL, and Payment
          solutions. What captivated me about your company, weApp, is its
          holistic approach to the development process. I believe in shaping and
          refining my role as a developer within such a comprehensive framework.
          Excited about the prospect of integrating into a professional
          environment, I am confident that my experiences and insights can
          contribute to the success of your team. Always open to new
          opportunities, I invite you to connect with me. Click on the "Contact"
          section to get in touch, and let's explore how we can collaborate.
        </p>
      </div>
    </div>
  );
};
