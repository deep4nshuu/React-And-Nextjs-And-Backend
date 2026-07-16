import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'
import {Button} from './components/ui/button'

function App() {

  return (
    <>
      <Button />
      <h1 className='text-blue-600 dark:text-sky-400 border-2 p-4 rounded-2xl'>Added first message in this project</h1>
      <div className='flex gap-4'>
        <Card title='Buy Python Course' buttonText='Try it' description='This course consists of all the fundamentals or basics of python and build your basic strong.' img="https://static.vecteezy.com/system/resources/previews/025/054/788/non_2x/vibrant-colors-and-messy-brush-strokes-create-abstract-painted-image-generated-by-ai-free-photo.jpg" />
        <Card title='Buy Ai/Ml Course' buttonText='Buy now' description='This course teaches Ai/ml from scratch and it also teaches all library required for learninng ML such as Numpy, Pandas, Matplotlib, Seaborn, etc and build your strong fundamentals' img="https://thumbs.dreamstime.com/b/tiger-wild-winter-nature-amur-tiger-running-snow-action-wildlife-scene-danger-animal-cold-winter-tajga-russ-84783074.jpg" />
        <Card />
      </div>
    </>
  )
}

export default App
