import React from "react";
import profilePic from "../headshot2022bravodelta.jpg";

interface HeaderProps {
  name: string;
  title: string;
  email: string;
  phone: string;
}

const Header: React.FC<HeaderProps> = ({ name, title, email, phone }) => {
  return (
    <div className="window">
      <img src={profilePic} alt="Profile" />
      <h1>{name}</h1>
      <h2>{title}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};

export default Header;
