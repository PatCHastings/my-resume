import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";

const myExperiences = [
  {
    title: "Software Engineer",
    company: "Company A",
    duration: "January 2020 - Present",
    description:
      "Developing and maintaining web applications using React and Node.js.",
  },
  {
    title: "Junior Developer",
    company: "Company B",
    duration: "June 2018 - December 2019",
    description:
      "Assisted in the development of internal tools and contributed to various projects.",
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
