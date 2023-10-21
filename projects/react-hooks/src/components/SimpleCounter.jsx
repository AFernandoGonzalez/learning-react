import { useEffect, useState } from "react"

export const SimpleCounter = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count: ${count}`
    }, [count])

    const increment = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        if (count <= 0) return;
        setCount(count - 1)
    }

    return(
        <div>
            <h3>Simple Counter</h3>
            <p>Live Count: {count}</p>
            <button onClick={decrease}>Decrease</button>
            <button onClick={increment}>Increase</button>
        </div>
    )
}