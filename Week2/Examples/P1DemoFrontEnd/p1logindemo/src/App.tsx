import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import { GameTable } from './Components/Games/GameTable'
import 'bootstrap/dist/css/bootstrap.css'
import { Register } from './Components/LoginRegister/Register'
//^THIS IS A REQUIRED MANUAL IMPORT FOR BOOTSTRAP TO WORK!!!!

function App() {


  return (
    <>
      <BrowserRouter><Routes>
        <Route path="games" element={<GameTable/>}/>
        <Route path="register" element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
