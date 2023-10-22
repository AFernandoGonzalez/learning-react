import { useEffect, useState } from "react";

const colorsPalate = [
    "#CB2821",
    "#FFFF00",
    "#317F43",
    "#CAC4B0",
    "#D84B20",
    "#AEA04B",
    "#2A6478"
]

export const EventListener = () => {

    const [isActivated, setIsActivated] = useState(false)

    useEffect(() => {
        randomizeColor()
console.log(randomizeColor());
    }, [])

    const randomizeColor = () => {
        const randomColorIndex = Math.floor(Math.random() * colorsPalate.length)

      
        return colorsPalate[randomColorIndex]
    }


    return (
        <section style={{ backgroundColor: "rgba(75,75,75,.3)", padding: "1rem" }}>
            <h4>Event Listener</h4>
            <div>
                <div
                    style={{ height: "5rem", display: "flex", flexDirection: "column", alignContent: "center", justifyContent: "center" }} id="randomColors">
                    Colors
                </div>
                <button
                    style={{ color: "white" }}
                    onClick={()=> setIsActivated(!isActivated)}
                >{isActivated ? "Deactivate Listener" : "Activate Listener"}</button>
            </div>
        </section>
    )
}