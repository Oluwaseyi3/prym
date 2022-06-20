import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Second from './components/SecondComp/Second'
import Thirdcomp from './components/Thirdcomp/Thirdcomp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar/>
      <Home/>
      <Second/>
      <Thirdcomp/>
    </div>
  )
}

export default App
