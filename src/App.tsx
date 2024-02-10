import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";

const myExperiences = [
  {
    title: "Software Engineer I",
    company: "JP Morgan Chase",
    duration: "April 2023 - Present",
    description: `Spearheaded full-stack software development initiatives, applying SOLID principles and Agile methodologies within a dynamic and highly skilled software engineering team. Demonstrated a strong proficiency as a team-oriented software engineer, contributing to the high standards of a renowned team.

    - Captiva Codemodule MX: Gained expertise in the main app we support: MX workflow and Captiva MX codebase. Played a key role in production support by debugging and fixing defects, leading to successful deployment of critical updates.
    
    - Unit Test Coverage initiative: Significantly improved code quality by increasing unit test coverage from below 50% to over 70% across 5 major repositories consisting of a collective 10,000 lines of code, utilizing NUnit, MSTest, JUnit, Jest, and SonarQube. Created a UTC Confluence guide that became widely used by other engineers who needed help configuring their build to properly export code coverage to SonarQube, always making myself available and helping a multitude of engineers who reached out.
    
    - Full Stack Development: Excelled in full-stack development roles, efficiently performed front-end and back-end development tasks. Showcased versatility across multiple programming languages and frameworks including C#, Java, React.js, and SQL, enhancing application performance, user experience, and reliability.
    
    - Onboarding Buddy Support: Provided efficient and personable onboarding assistance to new ETSE hires, always making myself available to help them and ensure expedience in their access to all necessary JPMC systems and environments.
    
    Technologies: Java, C#, React.js, Python, SQL
    Methodologies: OOP, TDD, DevOps, CI/CD, Agile.`,
  },
  {
    title: "Jr Software Engineer - JPMC Contractor",
    company: "Korn Ferry / JPMC",
    duration: "Oct 2022 - Apr 2023",
    description: `As a contingent contractor, I joined the JPMC File Intake & Archive Services team Change Chasers as a Jr Software Engineer, and I promptly learned the internal systems, environment, and got up to speed with the team and business velocity, finding any areas to contribute value and work ethic. 

    - Unit Test Coverage: I successfully increased code quality via unit test coverage on Captiva Codemodule MX, the main application we support, and achieved the goal of meeting the deadline for the initiative to reach 70% coverage.
    
    - Captiva codemodule MX: I took on the task of learning and understanding the MX workflow and successfully processing mortgage batch files through all the steps. 
    
    - Production Support: I took ownership of a Production Support role, troubleshooting and resolving error batches in the production environment of our MX workflow, ensuring for our clients no breach in SLA, and prompt reprocessing of the crucial mortgage documents for the business. I showed initiative in conducting daily regression testing of the UAT environment to ensure functionality, and consistently provided the team break-glass support in accessing necessary servers.`,
  },
  // Add more experiences
];

function App() {
  return (
    <div className="App">
      <Header
        name="Patrick Hastings"
        title="Software Engineer I"
        email="phastings82@gmail.com"
        phone="614-787-5568"
      />
      <AboutMe bio="Here is a brief introduction about myself. I am a passionate software engineer with a keen interest in building scalable web applications. In my free time, I enjoy contributing to open source projects and exploring new technologies." />
      <Experience experiences={myExperiences} />
    </div>
  );
}

export default App;
