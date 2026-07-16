import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import PostStore from './components/PostStore'

function App() {


  return (
    <>
      <h1>Zustand</h1>
      <Counter />
      <PostStore />
    </>
  )
}

export default App
