import { useState, useEffect } from "react"

export const TodoList = () => {
    const [todoList, setTodoList] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a todo app', completed: false },
        { id: 3, text: 'Add JSON data', completed: true },
    ])

    const [newTodo, setNewTodo] = useState('')

    //update the complete checkbox
    const completedTracker = (todoId) => {
        const updatedTodo = todoList.map((todo) => {
            if (todo.id === todoId) {
                return { ...todo, completed: !todo.completed }
            }
            return todo
        })
        setTodoList(updatedTodo)
    }

    const addTodo = () => {
        if (newTodo.trim() === "") return
        const newTodoItem = {
            id: todoList.length + 1,
            text: newTodo,
            completed: false
        }
        setTodoList([...todoList, newTodoItem])
        setNewTodo('')
    }

    return (
        <div>
            <h3>Todo List</h3>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={addTodo}>Add Todo</button>
            {todoList.map((todo) => {
                return (
                    <ul key={todo.id} style={{ listStyle: "none" }}>
                        <li>{todo.text}</li>
                        <span>{todo.completed ? "Yes" : "No"}</span>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => completedTracker(todo.id)}
                        />
                    </ul>
                )
            })}
        </div>
    )
}

