import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  const handleClick = (value) => {
    if (value === "=") {
      calculateResult();
    } else if (value === "AC") {
      setInput("");
      setResult("");
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch {
      setResult("Error");
    }
  };


  // For immidiate result to appear put inside useEffect
  // useEffect(() => {
  //   try {
  //     setResult(eval(input).toString());
  //   } catch {
  //     setResult("Error");
  //   }
  // }, [input]);

  const colors = {
    lightBackground: "#f8f9fa",
    darkBackground: "#0d1517",
    lightText: "#000000",
    darkText: "#ffffff",
    btnPrimary: "#007bff",
    btnSecondary: "#6c757d",
    btnDanger: "#dc3545",
    btnDarkBackground: "#469c94",
    btnLightBackground: "#9fc9cf",
  };

  return (
    <>
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundColor: darkMode
          ? colors.darkBackground
          : colors.lightBackground,
        color: darkMode ? colors.darkText : colors.lightText,
      }}
    >
     
      <div
        className="frame"
        style={{
          width: "400px",
          height: "600px",
          backgroundColor: darkMode
            ? colors.darkBackground
            : colors.lightBackground,
          border: `1px solid ${darkMode ? colors.darkText : colors.lightText}`,
          padding: "20px",
          borderRadius: "10px",
          boxShadow: `0px 4px 10px ${darkMode ? colors.lightBackground : colors.darkBackground}`
        }}
      >
        <div className="text-end mb-3">
          <button
            className="btn btn-outline-light"
            onClick={changeMode}
            style={{
              color: darkMode ? colors.lightText : colors.darkText,
              backgroundColor: darkMode ? colors.lightBackground : colors.btnDarkBackground,
              borderColor: darkMode ? colors.lightText : colors.darkText,
            }}
          >
            <i className={`bi ${darkMode ? "bi-sun" : "bi-moon"}`} ></i>
          </button>
        </div>

        <div className="mb-3">
          <input
            type="text"
            value={input}
            readOnly
            style={{
              color: darkMode ? colors.lightText : colors.darkText,
              backgroundColor: darkMode
                ? colors.lightBackground
                : colors.darkBackground,

              padding: "15px ",
              width: "100%",
              height: "70px",
              fontSize: "30px",
              fontWeight: "bold",
              border: 'none',
              outline:'none'


            }}
          />
          <input
            type="text"
            value={result}
            readOnly
            style={{
              color: darkMode ? colors.lightText : colors.darkText,
              backgroundColor: darkMode
                ? colors.lightBackground
                : colors.darkBackground,

              padding: "15px",
              width: "100%",
              height: "30px",
              fontSize: "20px",
              fontWeight: "bold",
              textAlign: "end",
              border: 'none',
              outline:'none'


            }}
          />
        </div>

        <div className="buttons d-flex flex-wrap">
          <button
            className="btn col-4"
            onClick={() => handleClick("AC")}
            style={{
              height: "50px",
              backgroundColor: colors.btnDanger,
              color: colors.lightText,
              fontSize: "20px",
              fontWeight: "bold",
              borderRadius: "5px",
            }}
          >
            AC
          </button>
          <button
            className="btn col-4"
            onClick={() => handleClick("/")}
            style={{
              height: "50px",
              backgroundColor: darkMode
                ? colors.btnDarkBackground
                
                : colors.btnDarkBackground,
              color: darkMode ? colors.darkText : colors.lightText,
              fontSize: "20px",
              fontWeight: "bold",
              borderRadius: "5px",
            }}
          >
            /
          </button>
          <button
            className="btn col-4"
            onClick={() => handleClick("*")}
            style={{
              height: "50px",
              backgroundColor: darkMode
                ? colors.btnDarkBackground
                : colors.btnDarkBackground,
              color: darkMode ? colors.darkText : colors.lightText,
              fontSize: "20px",
              fontWeight: "bold",
              borderRadius: "5px",
            }}
          >
            *
          </button>

          {["7", "8", "9", "-"].map((val, idx) => (
            <button
              key={idx}
              className="btn col-3"
              onClick={() => handleClick(val)}
              style={{
                height: "50px",
                backgroundColor: darkMode
                  ? colors.btnDarkBackground
                  : colors.btnDarkBackground,
                color: darkMode ? colors.darkText : colors.lightText,
                fontSize: "20px",
                fontWeight: "bold",
                borderRadius: "5px",
              }}
            >
              {val}
            </button>
          ))}

          {["4", "5", "6", "+"].map((val, idx) => (
            <button
              key={idx}
              className="btn col-3"
              onClick={() => handleClick(val)}
              style={{
                height: "50px",
                backgroundColor: darkMode
                  ? colors.btnDarkBackground
                  : colors.btnDarkBackground,
                color: darkMode ? colors.darkText : colors.lightText,
                fontSize: "20px",
                fontWeight: "bold",
                borderRadius: "5px",
              }}
            >
              {val}
            </button>
          ))}

          {["1", "2", "3", "="].map((val, idx) => (
            <button
              key={idx}
              className="btn col-3"
              onClick={() => handleClick(val)}
              style={{
                height: "50px",
                backgroundColor: darkMode
                  ? colors.btnDarkBackground
                  : colors.btnDarkBackground,
                color: darkMode ? colors.darkText : colors.lightText,
                fontSize: "20px",
                fontWeight: "bold",
                borderRadius: "5px",
              }}
            >
              {val}
            </button>
          ))}

          <button
            className="btn col-6"
            onClick={() => handleClick("0")}
            style={{
              height: "50px",
              backgroundColor: darkMode
                ? colors.btnDarkBackground
                : colors.btnDarkBackground,
              color: darkMode ? colors.darkText : colors.lightText,
              fontSize: "20px",
              fontWeight: "bold",
              borderRadius: "5px",
            }}
          >
            0
          </button>
          <button
            className="btn col-3"
            onClick={() => handleClick(".")}
            style={{
              height: "50px",
              backgroundColor: darkMode
                ? colors.btnDarkBackground
                : colors.btnDarkBackground,
              color: darkMode ? colors.darkText : colors.lightText,
              fontSize: "20px",
              fontWeight: "bold",
              borderRadius: "5px",
            }}
          >
            .
          </button>
          <button
            className="btn col-3"
            onClick={() => handleClick("DEL")}
            style={{
              height: "50px",
              backgroundColor: colors.btnDanger,
              color: colors.lightText,
              fontSize: "20px",
              fontWeight: "bold",
              borderRadius: "5px",
            }}
          >
            DEL
          </button>
        </div>
      </div>
      <div className="d-flex" style={{position:'absolute',top:'40px' ,bottom:"0",right:'300px'}}>
        <Link to={"/secondbutton"}><button className="btn btn-primary" >Second Calculator</button></Link>
      </div>
    </div>
    </>
  );
}

export default App;
