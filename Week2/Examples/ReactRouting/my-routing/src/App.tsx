import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { EmployeeContainer } from './Components/EmployeeComponent/EmployeeContainer'
import { data } from './employeeData'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { CalculationComponent } from './Components/CalculatorComponent/Calculation'

function App() {


  return (
    <div className="App">
      <BrowserRouter><Routes>
        <Route path="/calc" element={<CalculationComponent/>}></Route>
        <Route path="/emp" element={<EmployeeContainer incomingData={data}/>}></Route>
        </Routes>
        </BrowserRouter>

</div>
  )
}

export default App;
