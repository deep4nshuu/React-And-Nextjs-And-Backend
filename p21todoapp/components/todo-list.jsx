"use client";

import React from 'react'
import TodoItem from './todo-item'
import { useQuery } from '@tanstack/react-query'
import { getTodo } from '@/actions/action'
import { Loader2 } from 'lucide-react'

const Todolist = () => {

    const {data:todos, isPending, error} = useQuery({
        queryKey:['todos'],
        queryFn: ()=> getTodo()
    })

    if(isPending){
        return (
            <Loader2 className='animate-spin' />
        )
    }

    if(error){
        return (
            <div className='flex justify-center p-8'>
                Failed to load todo
            </div>
        )
    }

    if(!todos && todos.length === 0){
        return (
            <div className='text-center p-8 text-muted-foreground'>
                No todos found. Create one to get started!
            </div>
        )
    } 

  return (
    <div className='space-y-1'>
      {
        todos.map((todo) => (
            <TodoItem key={todo._id} todo={todo}/>
        ))
      }
    </div>
  )
}

export default Todolist
