import React from 'react'
import { Checkbox } from './ui/checkbox'
import { Button } from './ui/button'
import { Trash } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteTodo, toggleTodo } from '@/actions/action'
import { toast } from 'sonner'

const TodoItem = ({todo}) => {

    const queryClient = useQueryClient()

    const {mutate:toggle} = useMutation({
        mutationFn:({id, completed}) => toggleTodo(id, completed),

        onSuccess: () => {
            toast.success("Todo completed successfully")
            queryClient.invalidateQueries({queryKey:['todos']})
        },

        onError: (err) => {
            toast.error("Failed to complete todo", err)
        }
    })

    const {mutate:remove} = useMutation({
        mutationFn: (id) => deleteTodo(id),
        onSuccess: () => {
            toast.success("Todo deleted successfully")
            queryClient.invalidateQueries({queryKey:['todos']})
        },
        onError: (err) => {
            toast.error("Failed to delete todo", err)
        }
    })

  return (
    <div className='flex items-center justify-between p-4 bg-card border rounded-lg shadow-sm hover:shadow-md transition-shadow'>
      <div className='flex items-center gap-3'>
        <Checkbox 
            checked={todo.completed}
            onCheckedChange={(checked) =>
                toggle({ id:todo._id, completed:checked})}
            id={`todo-${todo._id}`}
        />

        <label
            htmlFor={`todo-${todo._id}`}
            className={cn(
                "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer", 
                todo.completed && "line-through text-muted-foreground"
            )}
        >
            {todo.title}
        </label>
      </div>
      <Button
        variant='destructive'
        size='icon'
        onClick={()=> remove(todo._id)}
      >
        <Trash size={19} />
      </Button>
    </div>
  )
}

export default TodoItem
