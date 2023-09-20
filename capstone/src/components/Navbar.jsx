import { useEffect, useState } from "react";
import Login from "./LoginButton";
import Logout from "./LogoutButton";
import SignUp from "./SignUp";

const NavBar = () => {
  // useEffect(() => {
  //   try {
  //     const logStatus = async () => {
  //       const response = await fetch("");
  //       const lstatus = await response.json();
  //       console.log(lstatus);
  //       setstatus(lstatus);
  //     };
  //     logStatus();
  //   } catch (error) {
  //     console.error("Error retreving log status", error);
  //   }
  // }, []);

  // const [status, setstatus] = useState([]);

  return (
    <>
      <header>
        <h1 id="Projecttitle">Capstone</h1>
        <div id="NavButtons">
          <Login />
          <Logout />
          <SignUp />
        </div>
        <ul className="Links">
          <li>
            <a href="" id="Home">
              {" "}
              Home{" "}
            </a>
          </li>
          <li>
            <a href="" id="Departments">
              {" "}
              Departments{" "}
            </a>
          </li>
          <li>
            <a href="" id="Cart">
              {" "}
              Cart{" "}
            </a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default NavBar;
