import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'
import SecondCalculator from './SecondCalculator'

const Myroute = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<App/>} />
          <Route path='/secondCalculator' element={<SecondCalculator/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default Myroute

