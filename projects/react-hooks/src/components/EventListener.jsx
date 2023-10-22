import { useEffect, useState } from "react";

const randomColorsPalate = [
    "#CB2821",
    "#FFFF00",
    "#317F43",
    "#CAC4B0",
    "#D84B20",
    "#AEA04B",
    "#2A6478"
]

export const EventListener = () => {
    const [colors, setColors] = useState(randomColorsPalate)
    const [isOn, setIsOn] = useState(false)

    useEffect(() => {
        const div = document.getElementById('randomColors')
        const changeColors = () => {
            const randomColorIndex = Math.floor(Math.random() * colors.length)
            let chosenColor = colors[randomColorIndex]
            div.style.backgroundColor = chosenColor
        }

        const clickHandler = isOn ? changeColors : null;
        div.addEventListener('click', clickHandler);

        return (() => {
            div.removeEventListener('click', clickHandler)
        })

    }, [colors, isOn])


    return (
        <section style={{ backgroundColor: "rgba(75,75,75,.3)", padding: "1rem" }}>
            <h4>Event Listener</h4>
            <div>
                <div id="randomColors">Colors</div>
                <button
                    style={{ color: "white" }}
                    onClick={() => setIsOn(!isOn)}
                >{isOn ? "On" : "Off"}</button>
            </div>
        </section>
    )
}