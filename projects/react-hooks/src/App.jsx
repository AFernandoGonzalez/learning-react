
import { SimpleCounter } from "./components/useEffectsProjects/SimpleCounter"
import { SwitcherApp } from "./components/useContextProjects/SwitcherApp"


export const App = () => {
    return (
        <main style={{display:"flex", flexDirection: "column", gap: "3rem"}}>
            <h1>Learning useEffect</h1>
            <SimpleCounter/>
            {/* <TodoList/>
            <DataFetching/>
            <CountdownTimerApp/>
            <EventListener/> */}
            <h1>Learning useContext</h1>
            <SwitcherApp/>
        </main>
    )
}