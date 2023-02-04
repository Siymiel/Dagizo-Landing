import React from "react";

const NavBar = () => {
  return (
    <nav className="py-4">
      <div className="flex justify-between items-center container mx-auto">
        <div>
          <img
            src="https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
            alt="logo"
            className="w-20 h-10 object-center object-cover"
          />
        </div>
        <ul className="flex space-x-12 items-center font-medium text-gray-400">
          <li>Home</li>
          <li>Features</li>
          <li>Contact Us</li>
          <li>
            <button className="text-xs px-7 py-1 rounded-full bg-white text-yellow-400 border-2 border-yellow-400 uppercase">
              Sign Up
            </button>
          </li>{" "}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
