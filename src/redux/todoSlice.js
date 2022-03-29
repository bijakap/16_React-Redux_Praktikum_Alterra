import { createSlice } from "@reduxjs/toolkit"

const initialDataTodos = [
    {
        id : 1,
        title : "Mengerjakan Execise",
        completed : true,
    },
    {
        id : 2,
        title : "Mengerjakan Homework",
        completed : true,
    },
]

export const todoSlice = createSlice({
    name : "todo",
    initialState : {
        todos : initialDataTodos,
    },
    reducers: {
        handleSubmit: (state, action) =>{
            let newTodo
            const OldTodos = [...state.todos]
            if (state.todos.length === 0) {
                newTodo = {id : 1, ...action.payload}
            } else {
                newTodo = {id : (state.todos[state.todos.length-1].id + 1), ...action.payload}
            }
            OldTodos.push(newTodo)
            state.todos = [...state.todos, newTodo]
        },
        handleDel: (state, action) => {
            state.todos = state.todos.filter((todo) => {
                return todo.id !== action.payload
            })
        },
        handleChanges : (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id){
                    if (todo.completed) {
                        todo.completed = false
                    } else {
                        todo.completed = true
                    }
                }
                return todo
            })
        }
    },
})

console.log("todoSlice = ", todoSlice)


export const { handleSubmit, handleDel, handleChanges } = todoSlice.actions

export default todoSlice.reducer