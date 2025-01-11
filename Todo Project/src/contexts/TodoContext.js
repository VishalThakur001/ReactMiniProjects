import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{}],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    editTodo: (id, todo) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodosProvider = TodoContext.Provider