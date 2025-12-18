import React, { useEffect } from "react";
import { TOTAL_SCREENS } from "../utilities/commonUtils";
import ScrollService from "../utilities/ScrollService";

export default function PortfolioContainer() {
  useEffect(() => {
    const handleScroll = (event) => {
      ScrollService.checkCurrentScreenUnderViewport(event);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mapAllScreens = () => {
    return TOTAL_SCREENS.map((screen) =>
      screen.component ? (
        <screen.component
          screenName={screen.screen_name}
          key={screen.screen_name}
          id={screen.screen_name}
        />
      ) : (
        <div key={screen.screen_name}></div>
      )
    );
  };

  return <div className="portfolio-container">{mapAllScreens()}</div>;
}
