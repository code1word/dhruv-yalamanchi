import { Subject } from "rxjs";

export default class ScrollService {
  static scrollHandler = ScrollService.currentScreenBroadCaster();

  static currentScreenBroadCaster() {
    return {
      scrollToHome: () => ScrollService.scrollToSection("home"),
      scrollToAboutMe: () => ScrollService.scrollToSection("aboutme"),
      scrollToResume: () => ScrollService.scrollToSection("resume"),
      scrollToProjects: () => ScrollService.scrollToSection("projects"),
      scrollToContactMe: () => ScrollService.scrollToSection("contactme"),
    };
  }

  static scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  static currentScreenFadeIn = new Subject();

  static checkCurrentScreenUnderViewport(event) {
    if (!event || Object.keys(event).length < 1) return;
    
    const sections = [
      "home",
      "aboutme", 
      "resume",
      "projects",
      "contactme"
    ];

    for (let screen of sections) {
      const screenElement = document.getElementById(screen);
      if (!screenElement) continue;

      const screenOffsetTop = screenElement.offsetTop;
      const screenHeight = screenElement.clientHeight;
      const screenOffsetBottom = screenOffsetTop + screenHeight;

      const scrollPosition = window.pageYOffset + window.innerHeight * 0.5;

      if (scrollPosition >= screenOffsetTop && scrollPosition < screenOffsetBottom) {
        let currentFadeInScreen = {
          fadeInScreen: screen,
        };
        ScrollService.currentScreenFadeIn.next(currentFadeInScreen);
        break;
      }
    }
  }
}
