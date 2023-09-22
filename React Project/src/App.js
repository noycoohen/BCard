import NavScrollExample from "./Components/NavBar";

import HomePage from "./Components/HomePage.jsx";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./Components/Footer.jsx";

import Registered from "./Components/Registered.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Main.jsx";
import { ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import { getUserInfo, getUserType } from "./Helpers/functions";

function App() {
  const [usertype, setuserType] = useState("guest");

  useEffect(() => {
    const token = localStorage.getItem("token");
    setuserType(getUserType(token));
  }, []);

  const [theme, setTheme] = useState("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.dataset.theme = newTheme;
  };

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={1300} theme="dark" />
      <NavScrollExample
        switchTheme={switchTheme}
        usertype={usertype}
      ></NavScrollExample>
      <Main userType={usertype} setuserType={setuserType} theme={theme}></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
