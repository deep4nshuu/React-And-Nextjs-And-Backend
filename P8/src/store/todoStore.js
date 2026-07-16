import {create} from "zustand"

export const useTodo = create((set) => ({
    todos: [],

    addTodo: (text) => set((state) => ({
        todos: [
            ...state.todos,
            {
                id: Date.now(),
                text
            }
        ]
    })),

    removeTodo: (id) => 
        set((state) => ({
            todos: state.todos.filter(todo => todo.id !== id) 
    })),

    updateTodo: (id, text) => 
        set((state) => ({
            todos: state.todos.map(todo => todo.id === id 
                ? {...todo, text} 
                : todo)
    }))
}))




// {...todo, text}  -> use this way to add something in existing list