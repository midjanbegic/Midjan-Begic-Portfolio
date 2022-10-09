import one from "../assets/svg/projects/weather.png";
import two from "../assets/svg/projects/social.login.png";
import three from "../assets/svg/projects/portfolio.png";

export const projectsData = [
  {
    id: 1,
    projectName: "Weather App",
    projectDesc:
      "This is my first project in which the JavaScript language was used. The project is based on weather forecasting",
    tags: ["JavaScript"],
    code: "https://github.com/midjanbegic/Weather-app",
    image: one,
  },
  {
    id: 2,
    projectName: "React/Node CRUD App",
    projectDesc:
      "This project contains a social login where you can find a tabular list of medicines when you log in, where you can also add other medicines on your own initiative. Deleting and editing are also available.",
    tags: ["React", "CSS", "Node.js"],
    code: "https://github.com/midjanbegic/social-login-app-v2",
    image: two,
  },
  {
    id: 3,
    projectName: "React portfolio",
    projectDesc: "Welcome!",
    tags: ["React", "SASS"],
    code: "GITHUB LINK",
    demo: "https://www.midjanbegic.com/",
    image: three,
  },
];
