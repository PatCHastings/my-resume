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
  // Function to convert description text to JSX elements
  const renderDescription = (description: string) => {
    return description.split("\n").map((paragraph, index) => {
      if (paragraph.trim().startsWith("-")) {
        const listItemContent = paragraph.trim().substring(1).trim();
        // Convert bullet points into list items
        return <li key={index}>{listItemContent.substring(0).trim()}</li>;
      } else {
        // Wrap paragraphs in <p> tags
        return <p key={index}>{paragraph}</p>;
      }
    });
  };

  return (
    <div>
      <h1>Experience</h1>
      {experiences.map((exp, index) => (
        <div key={index}>
          <h2>{exp.title}</h2>
          <h3>{exp.company}</h3>
          <p>{exp.duration}</p>
          <ul>{renderDescription(exp.description)}</ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
