import { useEffect, useState } from "react";

const colorsPalate = [
    "#CB2821",
    "#FFFF00",
    "#317F43",
    "#CAC4B0",
    "#D84B20",
    "#AEA04B",
    "#CAC3B0",
    "#D44B20",
    "#AEA02B",
    "#2A6478"
]

export const EventListener = () => {

    const [isActivated, setIsActivated] = useState(false);

    useEffect(() => {
        const divElement = document.getElementById('randomColors')

        const changeColor = () => {
            const newColorIndex = randomizedColorIndex()
            divElement.style.backgroundColor = newColorIndex
        }

        if(isActivated){
            divElement.addEventListener('mouseover', changeColor)
        }else{
            divElement.removeEventListener('mouseover', changeColor)
        }

        //clean up function
        return (() => {
            divElement.removeEventListener('mouseover', changeColor)
        })

    }, [isActivated])


    const randomizedColorIndex = () => {
        const randomColorIndex = Math.floor(Math.random() * colorsPalate.length)
        return colorsPalate[randomColorIndex]
    }

    return (
        <section style={{ backgroundColor: "rgba(75,75,75,.3)", padding: "1rem" }}>
            <h4>Event Listener</h4>
            <div>
                <div
                    style={{
                        height: "5rem",
                        display: "flex",
                        flexDirection: "column",
                        alignContent: "center",
                        justifyContent: "center",
                        border: "1px solid white"
                    }} id="randomColors">
                    Colors
                </div>
                <button
                    style={{
                        color: "white",
                        margin: "1rem"
                    }}
                    onClick={() => setIsActivated(!isActivated)}
                >
                    {isActivated ? "Deactivate" : "Activate to Hover"}
                </button>
            </div>
        </section>
    )
}