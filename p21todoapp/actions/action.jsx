"use server"

import { connectDB } from "@/lib/db"
import Todo from "@/lib/models/todo"
import { todoSchema } from "@/schemas/todo-schema"

export async function addTodo(data){
    await connectDB()
    const validatedFields = todoSchema.safeParse(data)

    // if zod validatn fails
    if(!validatedFields.success){
        return { error: "Invalid Fields"}
    }

    try {
        const newTodo = await Todo.create(validatedFields.data)
        return JSON.parse(JSON.stringify(newTodo))
    } catch (error) {
        console.log("Failed to create todo:", error)
        return { error: "Failed to create todo"}
    }
}

export async function getTodo(){

    await connectDB();

    try {
        const todos = await Todo.find({}).sort({createdAt: -1})
        return JSON.parse(JSON.stringify(todos))
    } catch (error) {
        throw new Error("Failed to fetch todos")
    }
}

// we pass {} inside find to get all todos 

export async function toggleTodo(id, completed){
    await connectDB();

    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            {completed},
            {new: true}
        )
        return JSON.parse(JSON.stringify(updatedTodo))
    } catch (error) {
        console.log("Failed to toggle todo:", error)
        throw new Error("Failed to toggle todo")
    }
}


export async function deleteTodo(id){
    await connectDB();
    try {
        await Todo.findByIdAndDelete(id)
        return { success: true }
    } catch (error) {
        console.log("Failed to delete todo:", error)
        throw new Error("Failed to delete todo")
    }
}