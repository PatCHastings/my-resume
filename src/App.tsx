import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header
        name="Patrick Hastings"
        title="Software Engineer I"
        email="phastings82@gmail.com"
        phone="614-787-5568"
      />
    </div>
  );
}

export default App;
