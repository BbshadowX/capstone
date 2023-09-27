import { Route, Routes, Link } from "react-router-dom";
import Login from "./LoginButton";
import Logout from "./LogoutButton";
import SignUp from "./SignUp";
import Cart from "./Cart";

export default function NavBar() {
  return (
    <div className="Navbar">
      <header>
        <h1 className="title">Capstone</h1>
        <nav className="NavLinks">
          <Link to="/">Home</Link>
          <br />
          <Link to="/departments">Departments</Link>
          <br />
          <Link to="/cart">Cart</Link>
          <div className="NavButtons">
            <Link to="/login">
              <Login />
            </Link>
            <Link to="/signUp">
              <SignUp />
            </Link>
            <Link to="/logout">
              <Logout />
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/Cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="logout" element={<Logout />} />
        </Routes>
      </header>
    </div>
  );
}
