
import { SimpleCounter } from "./components/useEffectsProjects/SimpleCounter"
import {TodoList} from './components/useEffectsProjects/TodoList'
import {DataFetching} from './components/useEffectsProjects/DataFetching'
import {CountdownTimerApp} from './components/useEffectsProjects/CountdownTimerApp'
import {EventListener} from './components/useEffectsProjects/EventListener'

import { SwitcherApp } from "./components/useContextProjects/SwitcherApp"
import { ShoppingCart } from "./components/useReducer/shoppingCart"

export const App = () => {
    return (
        <main style={{display:"flex", flexDirection: "column", gap: "3rem"}}>
            <h1>Learning useReducer</h1>
            <ShoppingCart/>
            <h1>Learning useEffect</h1>
            <SimpleCounter/>
            <TodoList/>
            {/* <DataFetching/> */}
            <CountdownTimerApp/>
            <EventListener/>
            <h1>Learning useContext</h1>
            <SwitcherApp/>
            <h1>Learning useReducer</h1>
        </main>
    )
}