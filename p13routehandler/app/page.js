"use client"

import { useState } from "react"

export default function Home() {

  const [title, setTitle] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    // to fetch the data created by POST
    const res = await fetch('/api/todos', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        completed: false
      })
    })

    const data = await res.json()

    if(data.success){
      setMessage("Todo Created:" + data.todo.title)
    }
    else{
      setMessage("Failed to create todo")
    }
  }

  return (
    <div>
      <h2>Create Todo</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={title}
          placeholder="Enter a todo"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {
        message && <p>{message}</p>
      }
    </div>
  );
}
