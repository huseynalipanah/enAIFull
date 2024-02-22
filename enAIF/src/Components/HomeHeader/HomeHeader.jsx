import React from "react";
import "./HomeHeader.scss";
const HomeHeader = () => {
  return (
    <div className="header">
      <div className="header-surface">
        <div className="header-text">
          <h1>
            Use all AI's from one <span>website</span>
          </h1>
          <p>
            Use <span>EnAI</span> to find all available Artificial Intelligences on one
            website and use the one you want
          </p>
        </div>
        <div className="all-ai">
          <button >See All</button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
