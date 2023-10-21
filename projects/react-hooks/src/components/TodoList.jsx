import { useState, useEffect } from "react"

export const TodoList = () => {
    const [todoList, setTodoList] = useState(() => {
        const storedData = localStorage.getItem('todoList');
        return storedData ? JSON.parse(storedData) : [];
    });


    const [newTodo, setNewTodo] = useState('')

    //save item to storage
    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todoList))
    }, [todoList])

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
            <button
                style={{ color: "white" }}
                onClick={addTodo}>Add Todo</button>
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
