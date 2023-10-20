import { useEffect, useState } from "react"

export const App = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count ${count}`

        return () => {
            document.title = 'React app'
        }


    }, [count])


    const increment = () => {
        setCount(count + 1)
    }

    return (
        <main>

            <h1>Hi there {count}</h1>
            <button onClick={increment}>Increase Here</button>
        </main>
    )
}