import { useEffect, useState } from "react"
import { SimpleCounter } from "./components/SimpleCounter"
import { TodoList } from "./components/TodoList"


export const App = () => {
    return (
        <main>
            <h1>Learning Use Effect</h1>
            <SimpleCounter />
            <TodoList/>
        </main>
    )
}