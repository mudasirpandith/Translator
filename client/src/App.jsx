import React from "react";

import { Route, Routes, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import Home from "./components/home";
const App = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default App;
