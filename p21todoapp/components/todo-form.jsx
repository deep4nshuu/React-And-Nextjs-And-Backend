"use client";

import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTodo } from '@/actions/action';
import { toast } from 'sonner';

const TodoForm = () => {

  const [title, setTitle] = useState()
  const queryClient = useQueryClient()

  // 1. created first mutatn of adding using useMutatn
  const mutation = useMutation({
    mutationFn: (data) => addTodo(data),
    onSuccess: ()=>{``
      queryClient.invalidateQueries({queryKey:['todos']})
      toast.success("Todo added successfully")
    },
    onError: ()=>{
      toast.error("Failed to add todo")
    }
  })

  const handleSubmit = async(e) => {
    e.preventDefault();

    mutation.mutate({title},{
      onSuccess: () => {
        setTitle("")
      }
    })
  }


  return (
    <form onSubmit={handleSubmit} className='flex gap-2 mb-5'>
      <Input 
        type={'text'}
        value={title}
        placeholder="Add a new todo"
        onChange={(e) => setTitle(e.target.value)}
        className={'flex-1'}
        disabled={mutation.isPending}
      />
      <Button type='submit'>
        <Plus size={20} className='mr-2'/>
        {
          mutation.isPending ? "Adding..." : "Add"
        }
      </Button>
    </form>
  )
}

export default TodoForm




/*

// it will refetch the query with key 'todos' and update the UI with new data without full page reload
//     queryClient.invalidateQueries({queryKey:['todos']})


// why we use useMutation hook with server action fn to create addTodo functionality 
// here server action performing backend action/work instead of api routes and useMutatn eliminates use of loading states, error handling, optimistic ui and invalidateQueries to update cache query list instantly


# Flow:
User types todo --> Clicks submit  -->  handleSubmit()  -->  mutatn.mutate({title})  -->  useMutatn()  -->  addTodo() Server actn  -->  mongodb  -->  Todo created  -->  onSuccess()  -->  useQuery refetch todo  -->  Updated todo list

*/