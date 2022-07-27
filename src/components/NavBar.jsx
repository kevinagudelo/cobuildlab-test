import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const NavBar = ( {isAuthenticated}) => {
  return (
    <nav className="row">
      <span className=" col">
        <h2>Cobuildlab-TASK-APP</h2>
      </span>
      {
        isAuthenticated
        ? <div className="col-auto">
        <LogoutButton />
      </div>
        :<div className="col-auto">
        <LoginButton />
      </div>
      }
      
      
    </nav>
  );
};
export default NavBar;
