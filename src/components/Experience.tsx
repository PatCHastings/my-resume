import React from "react";

interface ExperienceEntry {
  title: string;
  company: string;
  duration: string;
  description: string;
}

interface ExperienceProps {
  experiences: ExperienceEntry[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <div>
      <h1>Experience</h1>
      {experiences.map((exp, index) => (
        <div key={index}>
          <h2>{exp.title}</h2>
          <h3>{exp.company}</h3>
          <p>{exp.duration}</p>
          <p>{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
