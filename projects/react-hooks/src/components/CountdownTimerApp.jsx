import React, { useState, useEffect } from 'react';

export const CountdownTimerApp = () => {
    const [duration, setDuration] = useState(0); // Initial duration in seconds
    const [isRunning, setIsRunning] = useState(false);
    const [remainingTime, setRemainingTime] = useState(60);

    // Implement timer logic with useEffect
    useEffect(() => {
        let timer;

        if (isRunning && remainingTime > 0) {
            timer = setInterval(() => {
                setRemainingTime(remainingTime - 1);
            }, 1000);
        }
        // Cleanup: Clear the timer when the component unmounts or the timer stops
        return () => {
            clearInterval(timer);
        };
    }, [isRunning, remainingTime]);

    // Start and stop the timer
    const startTimer = () => {
        setIsRunning(true);
    };

    const stopTimer = () => {
        setIsRunning(false);
    };

    const changeDuration = () => {
        setRemainingTime(parseInt(duration, 10))
    }


    return (
        <div style={{ backgroundColor: "rgba(75,75,75,.3)", padding: "1rem" , display: "flex", gap: "1rem", flexDirection: "column"}}>
            <h2>Countdown Timer</h2>
            <p>Remaining Time: {remainingTime} seconds</p>
            <input
                type='number'
                min={0}
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
            />
            <button
                onClick={changeDuration}
                style={{ color: "white" }}
            >Change Duration</button>
            <button
                style={{ color: "white" }}
                onClick={startTimer}>Start</button>
            <button
                style={{ color: "white" }}
                onClick={stopTimer}>Stop</button>
        </div>
    );
}

