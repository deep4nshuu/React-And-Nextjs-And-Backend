import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Todo from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Todo list app by Zustand</h1>
      <Todo />
    </>
  )
}

export default App
