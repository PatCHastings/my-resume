import React from "react";

interface AboutMeProps {
  bio: string;
  // interests, goals, etc.
}

const AboutMe: React.FC<AboutMeProps> = ({ bio }) => {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <p>{bio}</p>
      {/* You can add more content here such as a list of interests or goals */}
    </div>
  );
};

export default AboutMe;
