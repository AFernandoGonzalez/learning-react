import React, { useEffect, useState } from 'react';

export const CountdownTimerApp = () => {
    const [currentTime, setCurrentTime] = useState(60)
    const [isCounting, setIsCounting] = useState(false)
    const [customTime, setCustomTime] = useState(0)


    useEffect(() => {
        let timer;

        timer = setInterval(() =>{
            if(isCounting && currentTime > 0) {
                setCurrentTime(currentTime - 1)
            }
        }, 1000)
        return(() => {
            clearInterval(timer)
        })
    }, [isCounting, currentTime])

    const startTimer = () => {
        setIsCounting(true)
    }

    const stopTimer = () => {
        setIsCounting(false)
    }

    const changeTime = () => {
        setCurrentTime(parseInt(customTime, 10))
    }

    return (
        <div style={{ backgroundColor: "rgba(75,75,75,.3)", padding: "1rem", display: "flex", gap: "1rem", flexDirection: "column" }}>
            <h2>Countdown Timer</h2>
            <input
                type='number'
                min={0}
                value={customTime}
                onChange={(e) => setCustomTime(e.target.value)}
            />
            <button
                style={{ color: "white" }}
                onClick={changeTime}
            >Change Time</button>
            <span>Time Left : {currentTime}</span>
            <div>
                <button
                    style={{ color: "white" }}
                    onClick={startTimer}
                >Start</button>
                <button
                    style={{ color: "white" }}
                    onClick={stopTimer}
                >Stop</button>
            </div>
        </div>
    );
}

