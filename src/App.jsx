// // import React from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // function App() {
// //   return (
// //     <>
// //     <div className="container d-flex justify-content-center align-items-center vh-100 ">
// //       <div className="p-2 bg-primary-emphasis rounded ">

// //       <div className="frame bg-primary-emphasis" style={{ width: '400px', height: '500px' }}>
// //         <div className="d-flex flex-column justify-content-center pt-1">
// //           <div className="mode">
// //             <h4 className='text-end pe-2'>modes</h4>
// //           </div>

// //         <input
// //           type="text"
// //           style={{ backgroundColor: 'black', color: 'white', border: '1px solid white', padding: '10px',width:'300px',height:'70px' }}
// //           />
// //           </div>
// //           </div>
// //       </div>
// //     </div>
// //           </>
// //   );
// // }

// // export default App;

// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleMode = () => {
//     setDarkMode(!darkMode);
//   };

//   const colors = {
//     lightBackground: "#f8f9fa",
//     darkBackground: "#0d1517",
//     lightText: "#000000",
//     darkText: "#ffffff",
//     secondary: "#6c757d",
//     btncolor:"#2a5e5a",
//     btnDarkBackground:"#469c94",
//     btnLightBackground:"#9fc9cf"
//   };

//   return (
//     <>
//       <div
//         className="container d-flex justify-content-center align-items-center vh-100"
//         style={{
//           backgroundColor: darkMode
//             ? colors.darkBackground
//             : colors.lightBackground,
//           color: darkMode ? colors.darkText : colors.lightText,
//         }}
//       >
//         <div
//           className="frame"
//           style={{
//             width: "400px",
//             height: "500px",
//             backgroundColor: darkMode ? colors.darkBackground : colors.lightBackground,
//             border: `1px solid ${darkMode ? colors.darkText : colors.lightText}`,
//             padding: "20px",
//             borderRadius: "8px",
//           }}
//         >
//           <div className="text-end">

//           <button className="btn btn-outline-light mb-3 " onClick={toggleMode} style={{
//             color: darkMode ? colors.lightText : colors.darkText,
//             backgroundColor: darkMode ? colors.lightBackground : colors.darkBackground
//           }}>
//             <i className={`bi ${darkMode ? "bi-sun" : "bi-moon"}`} ></i>
//             {darkMode ? " Light Mode" : " Dark Mode"}
//           </button>
//             </div>

//           <input
//             type="text"
//             style={{

//               color: darkMode ? colors.lightText : colors.darkText,
//               backgroundColor: darkMode ? colors.lightBackground : colors.darkBackground,
//               border: `1px solid ${darkMode ? colors.darkText : colors.lightText
//                 }`,
//               padding: "10px",
//               width: "100%",
//               height: '70px',
//               fontSize: '30px',
//               fontWeight:'bold'
//             }}
//           />
//           <div className="buttons col-12 my-2 d-flex justify-content-between flex-wrap">
//           <button
//           className="btn btn-primary col-5 my-1"
//           style={{
//             height: "50px",
//             backgroundColor: darkMode ? colors.btnDarkBackground : colors.btnLightBackground,
//             color: darkMode ? colors.darkText : colors.lightText,
//             fontSize: "30px",
//             fontWeight: "bold",
//           }}
//         >
//           AC
//         </button>
//         <button
//           className="btn btn-primary col-3 my-1"
//           style={{
//             height: "50px",
//             backgroundColor: darkMode ? colors.btnDarkBackground : colors.btnLightBackground,
//             color: darkMode ? colors.darkText : colors.lightText,
//             fontSize: "30px",
//             fontWeight: "bold",
//           }}
//         >
//           /
//         </button>
//         <button
//           className="btn btn-primary col-3 my-1"
//           style={{
//             height: "50px",
//             backgroundColor: darkMode ? colors.btnDarkBackground : colors.btnLightBackground,
//             color: darkMode ? colors.darkText : colors.lightText,
//             fontSize: "30px",
//             fontWeight: "bold",
//           }}
//         >
//           X
//         </button>
//         <button
//           className="btn btn-primary col-3 my-1"
//           style={{
//             height: "50px",
//             backgroundColor: darkMode ? colors.btnDarkBackground : colors.btnLightBackground,
//             color: darkMode ? colors.darkText : colors.lightText,
//             fontSize: "30px",
//             fontWeight: "bold",
//           }}
//         >
//           X
//         </button>
//         <button
//           className="btn btn-primary col-3 my-1"
//           style={{
//             height: "50px",
//             backgroundColor: darkMode ? colors.btnDarkBackground : colors.btnLightBackground,
//             color: darkMode ? colors.darkText : colors.lightText,
//             fontSize: "30px",
//             fontWeight: "bold",
//           }}
//         >
//           X
//         </button>
//         <button
//           className="btn btn-primary col-3 my-1"
//           style={{
//             height: "50px",
//             backgroundColor: darkMode ? colors.btnDarkBackground : colors.btnLightBackground,
//             color: darkMode ? colors.darkText : colors.lightText,
//             fontSize: "30px",
//             fontWeight: "bold",
//           }}
//         >
//           X
//         </button>
//         <button
//           className="btn btn-primary col-3 my-1"
//           style={{
//             height: "50px",
//             backgroundColor: darkMode ? colors.btnDarkBackground : colors.btnLightBackground,
//             color: darkMode ? colors.darkText : colors.lightText,
//             fontSize: "30px",
//             fontWeight: "bold",
//           }}
//         >
//           X
//         </button>
//         <button
//           className="btn btn-primary col-3 my-1"
//           style={{
//             height: "50px",
//             backgroundColor: darkMode ? colors.btnDarkBackground : colors.btnLightBackground,
//             color: darkMode ? colors.darkText : colors.lightText,
//             fontSize: "30px",
//             fontWeight: "bold",
//           }}
//         >
//           X
//         </button>
//         <button
//           className="btn btn-primary col-3 my-1"
//           style={{
//             height: "50px",
//             backgroundColor: darkMode ? colors.btnDarkBackground : colors.btnLightBackground,
//             color: darkMode ? colors.darkText : colors.lightText,
//             fontSize: "30px",
//             fontWeight: "bold",
//           }}
//         >
//           X
//         </button>
//         <button
//           className="btn btn-primary col-3 my-1"
//           style={{
//             height: "50px",
//             backgroundColor: darkMode ? colors.btnDarkBackground : colors.btnLightBackground,
//             color: darkMode ? colors.darkText : colors.lightText,
//             fontSize: "30px",
//             fontWeight: "bold",
//           }}
//         >
//           X
//         </button>
//         <button
//           className="btn btn-primary col-3 my-1"
//           style={{
//             height: "50px",
//             backgroundColor: darkMode ? colors.btnDarkBackground : colors.btnLightBackground,
//             color: darkMode ? colors.darkText : colors.lightText,
//             fontSize: "30px",
//             fontWeight: "bold",
//           }}
//         >
//           X
//         </button>
//         <button
//           className="btn btn-primary col-3 my-1"
//           style={{
//             height: "50px",
//             backgroundColor: darkMode ? colors.btnDarkBackground : colors.btnLightBackground,
//             color: darkMode ? colors.darkText : colors.lightText,
//             fontSize: "30px",
//             fontWeight: "bold",
//           }}
//         >
//           X
//         </button>
//         <button
//           className="btn btn-primary col-3 my-1"
//           style={{
//             height: "50px",
//             backgroundColor: darkMode ? colors.btnDarkBackground : colors.btnLightBackground,
//             color: darkMode ? colors.darkText : colors.lightText,
//             fontSize: "30px",
//             fontWeight: "bold",
//           }}
//         >
//           X
//         </button>
//         <button
//           className="btn btn-primary col-3 my-1"
//           style={{
//             height: "50px",
//             backgroundColor: darkMode ? colors.btnDarkBackground : colors.btnLightBackground,
//             color: darkMode ? colors.darkText : colors.lightText,
//             fontSize: "30px",
//             fontWeight: "bold",
//           }}
//         >
//           X
//         </button>
//         <button
//           className="btn btn-primary col-3 my-1"
//           style={{
//             height: "50px",
//             backgroundColor: darkMode ? colors.btnDarkBackground : colors.btnLightBackground,
//             color: darkMode ? colors.darkText : colors.lightText,
//             fontSize: "30px",
//             fontWeight: "bold",
//           }}
//         >
//           X
//         </button>
//         <button
//           className="btn btn-primary col-3 my-1"
//           style={{
//             height: "50px",
//             backgroundColor: darkMode ? colors.btnDarkBackground : colors.btnLightBackground,
//             color: darkMode ? colors.darkText : colors.lightText,
//             fontSize: "30px",
//             fontWeight: "bold",
//           }}
//         >
//           X
//         </button>
//         <button
//           className="btn btn-primary col-3 my-1"
//           style={{
//             height: "50px",
//             backgroundColor: darkMode ? colors.btnDarkBackground : colors.btnLightBackground,
//             color: darkMode ? colors.darkText : colors.lightText,
//             fontSize: "30px",
//             fontWeight: "bold",
//           }}
//         >
//           X
//         </button>
//         <button
//           className="btn btn-primary col-3 my-1"
//           style={{
//             height: "50px",
//             backgroundColor: darkMode ? colors.btnDarkBackground : colors.btnLightBackground,
//             color: darkMode ? colors.darkText : colors.lightText,
//             fontSize: "30px",
//             fontWeight: "bold",
//           }}
//         >
//           X
//         </button>
//         <button
//           className="btn btn-primary col-3 my-1"
//           style={{
//             height: "50px",
//             backgroundColor: darkMode ? colors.btnDarkBackground : colors.btnLightBackground,
//             color: darkMode ? colors.darkText : colors.lightText,
//             fontSize: "30px",
//             fontWeight: "bold",
//           }}
//         >
//           X
//         </button>
        
//         </div>

       
//         </div>
        
//       </div>
//     </>
//   );
// }

// export default App;





import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const handleClick = (value) => {
    if (value === "=") {
      calculateResult();
    } else if (value === "AC") {
      setInput("");
      setResult("");
    } else if (value === "C") {
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
    <div
      className="container d-flex justify-content-center align-items-center vh-100"
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
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="text-end mb-3">
          <button
            className="btn btn-outline-light"
            onClick={toggleMode}
            style={{
              color: darkMode ? colors.lightText : colors.darkText,
              backgroundColor:darkMode ? colors.lightBackground:colors.btnDarkBackground,
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
              border:'none'
              

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
              textAlign:"end",
              border:'none'
           
           
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
            onClick={() => handleClick("C")}
            style={{
              height: "50px",
              backgroundColor: colors.btnDanger,
              color: colors.lightText,
              fontSize: "20px",
              fontWeight: "bold",
              borderRadius: "5px",
            }}
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
