import style from "./About.module.css";

function About() {
  return (
    <div className={style.container}>
      <h1>Discover the Epic World of Rick and Morty</h1>
      <p>
        Rick and Morty is a popular animated science fiction series created by
        Justin Roiland and Dan Harmon. Join the adventures of Rick Sanchez, an
        eccentric scientist, and his grandson Morty Smith.
      </p>
      <p>
        Traveling through the multiverse, Rick and Morty explore different
        dimensions, facing absurd and dangerous situations. This series combines
        dark humor, satire, and science fiction elements to create a unique and
        captivating style.
      </p>
      <p>
        This application is designed to showcase information about the series'
        characters. Discover various characters and explore their details,
        including their name, status, species, and origin.
      </p>
      <p>
        I developed this application as part of the Full Stack course offered by
        Henry, where I put into practice each module learned in both the
        Front-end and Back-end.
      </p>
      <img
        src={require("../img/About.jpeg").default}
        alt="Creador"
        height="300px"
      />
      <p>
        As a civil engineer, I'm passionate about the IT world and have found a
        new path in my career as a Full Stack developer. With every line of code
        I write, I feel my passion for technology and innovation ignite. My goal
        is to merge my engineering skills with my dedication to the Tech
        industry, creating impactful and functional applications that enhance
        user experiences.
      </p>
      <p>
        Through this Rick and Morty application project, I aim to combine my
        technical knowledge with creativity, providing an interactive and
        thrilling experience for fans of the series. From character searches to
        displaying intriguing details, each feature I develop aims to immerse
        users in the fascinating universe of Rick and Morty.
      </p>
      <p>
        I'm committed to continuously learning and improving my skills as a Full
        Stack developer, and this application is just the beginning of my
        journey in the Tech industry. With every project, my goal is to push
        boundaries and deliver high-quality solutions that make a difference in
        the digital world. Join me on this adventure and explore the Rick and
        Morty universe through this passionately crafted application!
      </p>
    </div>
  );
}
export default About;
