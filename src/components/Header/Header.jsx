import React from "react";
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <h1>MY BLOG</h1>
      <p>Welcome to the blog of <span className="header-span">Anand</span></p>
    </div>
  );
};

export default Header;
