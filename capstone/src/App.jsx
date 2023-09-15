import "./App.css";
import RenderAllItems from "/api/GetItems";
// import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <RenderAllItems />
    </>
  );
}

export default App;
