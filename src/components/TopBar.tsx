import React from "react";

interface TopBarProps {
  onSelectSection: (sectionId: string) => void;
}

const TopBar: React.FC<TopBarProps> = ({ onSelectSection }) => {
  return (
    <div className="top-menu-bar">
      <button className="button" onClick={() => onSelectSection("header")}>
        Header
      </button>
      <button className="button" onClick={() => onSelectSection("aboutMe")}>
        About Me
      </button>
      <button className="button" onClick={() => onSelectSection("experience")}>
        Experience
      </button>
      <button className="button" onClick={() => onSelectSection("projects")}>
        Projects
      </button>
      {/* Add more sections as needed */}
    </div>
  );
};

export default TopBar;
