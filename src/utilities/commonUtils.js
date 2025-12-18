import Home from "../components/Home/Home";
import AboutMe from "../components/AboutMe/AboutMe";
import Resume from "../components/Resume/Resume";
import Projects from "../components/Projects/Projects";
import ContactMe from "../components/ContactMe/ContactMe";

export const TOTAL_SCREENS = [
  {
    screen_name: "home",
    component: Home,
  },
  {
    screen_name: "aboutme",
    component: AboutMe,
  },
  {
    screen_name: "resume",
    component: Resume,
  },
  {
    screen_name: "projects",
    component: Projects,
  },
  {
    screen_name: "contactme",
    component: ContactMe,
  },
];
