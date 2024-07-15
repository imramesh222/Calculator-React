import React, { useState } from 'react'

const SecondCalculator = () => {

  const [darkMode,setDarkMode]=useState(false);

  const changeMode=()=>{
    setDarkMode(!darkMode);
  }

  const colors={
    lightBackground: "#f8f9fa",
    darkBackground: "#0d1517",
    lightText: "#000000",
    darkText: "#ffffff",
    btnPrimary: "#007bff",
    btnSecondary: "#6c757d",
    btnDanger: "#dc3545",
    btnDarkBackground: "#469c94",
    btnLightBackground: "#9fc9cf"
  }
  return (
    <>
    <div className="d-flex justify-content-center align-items center vh-100" style={{
      backgroundColor:darkMode ? colors.darkBackground:colors.lightBackground,
      border:`1px solid ${darkMode ? colors.lightText:colors.darkText}` ,
      boxShadow: `0px 4px 10px ${darkMode ? colors.lightBackground : colors.darkBackground}`
    
    }}>
      <div className="text-end mb-3" onClick={changeMode}>

      </div>

    </div>

      
    </>
  )
}

export default SecondCalculator
