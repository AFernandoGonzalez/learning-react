import { useEffect, useState } from "react"

export const SimpleCounter = () => {

    const [count, setCount] = useState(0)
    const [newCount, setNewCount] = useState(0)

    //Exercise 1: Basic useEffect Usage
    useEffect(() => {
        document.title = `Count: ${count}`

        //Exercise 3: Cleanup Function
        return () => {
            document.title = ''
        }
    }, [count]) //Exercise 2: Dependency Array
    // if i leave the dependency empty the effect will only run once and it wont rerun again

    const increment = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        if (count <= 0) return;
        setCount(count - 1)
    }
    const changeCount = () => {
        setCount(parseInt(newCount, 10))
        setNewCount(0)
    }
    

    return (
        <div>
            <h3>Simple Counter</h3>
            <p>Live Count: {count}</p>
            <div>
                <input
                    type="number"
                    value={newCount}
                    onChange={(e) => setNewCount(e.target.value)}
                />
                <button
                    style={{ color: "white" }}
                    onClick={changeCount}
                >
                Change count
                </button>
            </div>
            <button style={{ color: "white" }} onClick={decrease}>Decrease</button>
            <button style={{ color: "white" }} onClick={increment}>Increase</button>
        </div>
    )
}