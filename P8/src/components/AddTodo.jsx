import { useState } from "react";
import { useTodo } from "../store/todoStore";


function AddTodo(){

    const [input, setInput] = useState('')

    const addTodo = useTodo(
        state => state.addTodo
    )

    const submitHandler = (e) => {
        e.preventDefault()
        addTodo(input)
        setInput('')
    }

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input 
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a todo..."
                value={input} 
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                AddTodo
            </button>
        </form>
    )
}

export default AddTodo