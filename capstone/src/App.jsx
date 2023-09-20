import "./App.css";
import RenderAllItems from "../api/GetItems";
// import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <div id="Items">
        <RenderAllItems />
      </div>
    </>
  );
}

export default App;
