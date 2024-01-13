// import { isElement } from 'react-dom/test-utils';
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";

// import { Routes, Route } from "react-router-dom";

// import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const [Mode, setmode] = useState("light"); // npm install react-router-dom

  const togglemode = () => {
    if (Mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showalert("Dark mode is enabled", "success");
      //  document.title='Textutils-Darkmode';
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode is enabled", "success");
    }
  };
   
  return (
    <>
      {/* <Router>
        <Navbar
          title="Word Counter"
          about="About"
          mode={Mode}
          togglemode={togglemode}
           
        />
        <Alert al={alert}></Alert>

        <div className="container">
          <Routes>
            <Route path="/about" element={<About />}></Route>

            <Route
              path="/"
              element={
                <Textform
                  alerts={showalert}
                  heading="Enter the text below to analyze "
                  mode={Mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router> */}
      {/* for git purpose */}
      
      <Navbar
          title="Word Counter"
          about="About"
          mode={Mode}
          togglemode={togglemode}
           
        />
        <Alert al={alert}></Alert>
        <div className="container">
        <Textform
                  alerts={showalert}
                  heading="Enter the text below to analyze "
                  mode={Mode}
                />
        </div>
    </>
  );
}
export default App;
