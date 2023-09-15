import Login from "./LoginButton";
import Logout from "./LogoutButton";
import SignUp from "./SignUp";

const NavBar = () => {
  return (
    <div>
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
      <div id="Nav Buttons">
        <Login />
        <Logout />
        <SignUp />
      </div>
    </div>
  );
};

export default NavBar;
