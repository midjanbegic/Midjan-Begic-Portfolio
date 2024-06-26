import one from "../assets/svg/projects/weather.png";
import two from "../assets/svg/projects/netflix.png";
import three from "../assets/svg/projects/portfolio.png";

export const projectsData = [
  {
    id: 2,
    projectName: "MERN-netflix",
    projectDesc:
      "MERN stack project inspired by the Netflix platform. Within this project, I utilized Redux Toolkit for state management, Firebase for authentication and data storage, Styled Components for component styling, Axios for API communication, and Node.js and Express for building the server.",
    tags: ["MognoDB", "Express", "React", "Node.js"],
    code: "https://github.com/midjanbegic/MERN-netflix",
    image: two,
  },
  {
    id: 3,
    projectName: "React portfolio",
    projectDesc: "Welcome!",
    tags: ["React", "SASS"],
    code: "https://github.com/midjanbegic/Midjan-Begic-Portfolio",
    demo: "midjanbegic.com",
    image: three,
  },
  {
    id: 1,
    projectName: "Weather App",
    projectDesc:
      "This is my first project in which the JavaScript language was used. The project is based on weather forecasting",
    tags: ["JavaScript"],
    code: "https://github.com/midjanbegic/Weather-app",
    demo: "https://mbweather-app.netlify.app/",
    image: one,
  },
];
