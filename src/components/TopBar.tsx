import React from "react";

interface TopBarProps {
  onSelectSection: (sectionId: string) => void;
}

const TopBar: React.FC<TopBarProps> = ({ onSelectSection }) => {
  return (
    <div className="top-menu-bar">
      <button onClick={() => onSelectSection("header")}>Header</button>
      <button onClick={() => onSelectSection("aboutMe")}>About Me</button>
      <button onClick={() => onSelectSection("experience")}>Experience</button>
      <button onClick={() => onSelectSection("projects")}>Projects</button>
      {/* Add more sections as needed */}
    </div>
  );
};

export default TopBar;
