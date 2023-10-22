import { useEffect, useState } from "react"
import { SimpleCounter } from "./components/SimpleCounter"
import { TodoList } from "./components/TodoList"
import { DataFetching } from "./components/DataFetching"
import { CountdownTimerApp } from "./components/CountdownTimerApp"
import { EventListener } from "./components/EventListener"


export const App = () => {
    return (
        <main style={{display:"flex", flexDirection: "column", gap: "3rem"}}>
            <h1>Learning Use Effect</h1>
            <SimpleCounter/>
            <TodoList/>
            <DataFetching/>
            <CountdownTimerApp/>
            <EventListener/>
        </main>
    )
}