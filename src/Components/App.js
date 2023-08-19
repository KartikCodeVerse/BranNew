import React, { useState } from "react";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import About from "./About";
import Alert from "./Alert";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "BranNew - Dark mode";
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "BranNew - Light mode";
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <div className="App">
      {/* <Router> */}
      <Navbar
        title="BranNew"
        home="Home"
        mode={mode}
        changeMode={changeMode}
        about="About"
      />
      <Alert alert={alert} />

      <div className="container">
        {/* <Routes>
            <Route path="/about" element={<About mode={mode} />} /> */}
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below:"
          mode={mode}
        />
        {/* <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below:"
                  mode={mode}
                />
              }
            /> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </div>
  );
}

export default App;
