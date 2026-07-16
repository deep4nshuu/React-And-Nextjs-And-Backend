import { useTodo } from "../store/todoStore";
import {FaEdit, FaSave} from 'react-icons/fa'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { useState } from "react";

function Todo(){

    const [editId, setEditId] = useState(null)
    const [editText, setEditText] = useState('')

    const todos = useTodo(
        state => state.todos
    )

    const removeTodo = useTodo(
        state => state.removeTodo
    )

    const updateTodo = useTodo(
        state => state.updateTodo
    )

    return (
        <>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                    >
                        {
                            editId === todo.id ? (
                                <input
                                    type="text"
                                    className="bg-gray-700 text-white px-2 py-1 rounded"
                                    value={editText} 
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                            ) : (
                                <div className="text-white">{todo.text}</div>
                            )
                        }
                        <div>
                            {
                                editId === todo.id ? (
                                    <button
                                        className='text-white bg-green-500 px-3 py-1 rounded'
                                        onClick={() => {
                                            updateTodo(
                                            todo.id,
                                            editText
                                            );
                                            setEditId(null);
                                            setEditText("");
                                        }}
                                    >
                                       <FaSave /> 
                                    </button>
                                ) : (
                                    <button
                                        className='text-white bg-green-500 px-3 py-1 rounded'
                                        onClick={(todo) => {
                                            setEditId(todo.id)
                                            setEditText(todo.text)
                                        }}
                                    >
                                        <FaEdit />
                                    </button>
                                )
                            }
                        </div>
                        <button
                            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                            onClick={() => removeTodo(todo.id)}
                        >
                            <RiDeleteBin5Fill />
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todo
