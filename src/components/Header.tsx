import React from "react";

interface HeaderProps {
  name: string;
  title: string;
  email: string;
  phone: string;
}

const Header: React.FC<HeaderProps> = ({ name, title, email, phone }) => {
  return (
    <div className="window">
      <h1>{name}</h1>
      <h2>{title}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};

export default Header;
