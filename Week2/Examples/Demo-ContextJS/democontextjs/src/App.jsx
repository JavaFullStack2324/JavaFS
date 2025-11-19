import { createContext, useState } from 'react'
import One from './One'
import Two from './Two'

import './App.css'

const DataContext = createContext();

function App() {

  const [data, setData] = useState("");

 

  return (
    <DataContext.Provider value = {{data, setData}}>
      <One/>
      <hr/>
      <Two/>
    </DataContext.Provider>


  )
}

export default App
export {DataContext};
