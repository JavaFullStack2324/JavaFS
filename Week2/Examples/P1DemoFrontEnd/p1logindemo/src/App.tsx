import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GameTable } from './Components/Games/GameTable'
import 'bootstrap/dist/css/bootstrap.css'
import { Register } from './Components/LoginRegister/Register'
import { Login } from './Components/LoginRegister/Login'
//^THIS IS A REQUIRED MANUAL IMPORT FOR BOOTSTRAP TO WORK!!!!

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        {/*empty string or / for path makes the component render at startup */}
        <Route path="" element={<Login />} />
        <Route path="games" element={<GameTable />} />
        <Route path="register" element={<Register />} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
