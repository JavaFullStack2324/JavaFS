import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FirstComponent } from './Components/FirstComponent/FirstComponent';
import { ParentComponent } from './Components/ParentComponent/ParentComponent';
import { UserComponent } from './Components/UserComponent/UserComponent';

/* The App.tsx is the root of out app (at least when it comes to rendering stuff on the page)
Most of the code we write will go elsewhere in the src folder, but the App.tsx cntrols WHAT gets rendered
We put the components we want to render in the div of the return()
We can render standalone elements within the div as well, but we usually won't do it

*/

function App() {

  return (

    <div className = "App">
      <header className = "App-header">
        <h1> Hello React! We'll make great modern front ends with you :)</h1>
        <p> We are writing in TSX, which is like HTML for React TS</p>
        <h3>React will reload the webpage with every saved change to the App</h3>
      </header>
      <FirstComponent></FirstComponent>
      <ParentComponent/>
      <UserComponent></UserComponent>
    </div>

    
  );
}

export default App
