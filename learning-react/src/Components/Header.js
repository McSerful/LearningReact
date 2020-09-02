import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
    
    <header className=" font-bold p-0 bg-pink-800 text-center text-xs p-3 flex justify-between items-center">
      
      <span className="font-bold text-white">NAGUNE</span>

      <Navigation />
    </header>
  );
}

export default Header;
