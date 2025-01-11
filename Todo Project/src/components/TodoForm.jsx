import React, { useState } from 'react'
import {useTodo} from '../contexts'

const TodoForm = () => {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()

        if(!todo) return

        addTodo({id: Date.now(), todo, completed: false})

        setTodo('')
    }

  return (
    <form onSubmit={add}
        className="flex w-full max-w-xl mx-auto p-4"
    >
        <input
            type="text"
            placeholder="Write Todo..."
            value={todo}
            className="w-full bg-white/15 rounded-l-lg px-2 py-2 text-white focus:outline-none"
            onChange={(e) => setTodo(e.target.value)}
        />
        
        <button
            type="submit"
            className="bg-green-500 rounded-r-lg px-4 py-2 text-white focus:outline-none"
        >
            Add
        </button>
    </form>
  )
}

export default TodoForm
