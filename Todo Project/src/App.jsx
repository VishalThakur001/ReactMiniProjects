import { useState, useEffect } from "react"
import {TodoForm, TodoItem} from "./components"
import { TodosProvider } from "./contexts"

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) =>{
    setTodos((prev) => [todo, ...prev])
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const editTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed : !prevTodo.completed} : prevTodo)))
  }

    useEffect(() => {
      const todos = JSON.parse(localStorage.getItem("todos")) || [];
  
      if (todos && todos.length > 0) {
        setTodos(todos)
      }
    }, [])
    
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

  return (
    <TodosProvider value={{todos, addTodo, deleteTodo, editTodo, toggleComplete}}>
      <div className=" bg-slate-700 w-screen h-screen flex flex-col gap-4">

        <div className="w-full flex flex-col items-center gap-4">

          <h1 className="mt-8 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r 
          from-green-500 via-yellow-500 to-purple-500
            animate-gradient-move bg-[length:200%]">Manage Your Todos</h1>

          <TodoForm/>

        </div>

        <div className="flex flex-col gap-2">
          {todos.map((todo) => (
            <div key={todo.id}
              className="w-full flex justify-center"
            >
              <TodoItem todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </TodosProvider>
  )
}

export default App
