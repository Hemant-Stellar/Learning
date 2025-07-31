import { useState, useEffect } from 'react'

function Counter() {
    const [workTime, setWorkTime] = useState(25)
    const [breakTime, setBreakTime] = useState(5)
    const [isWork, setIsWork] = useState(true)
    const [timeLeft, setTimeLeft] = useState(workTime * 60)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        let timer
        if (isRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(timeLeft - 1)
            }, 1000)
        } else if (timeLeft === 0) {
            alert(isWork ? 'Work time is over, break starts!' : 'Break time is over, work starts!')
            setIsWork(!isWork)
            setTimeLeft(isWork ? breakTime * 60 : workTime * 60)
        }
        return () => clearInterval(timer)
    }, [isRunning, timeLeft, isWork, workTime, breakTime])

    const handleReset = () => {
        setIsRunning(false)
        setIsWork(true)
        setTimeLeft(workTime * 60)
    }

    return (
        <div>
            <div>
                <label>
                    Work Time (minutes):
                    <input
                        type="number"
                        value={workTime}
                        placeholder="Enter work time"
                        onChange={(e) => setWorkTime(Number(e.target.value))}
                    />
                </label>
            </div>
            <div>
                <label>
                    Break Time (minutes):
                    <input
                        type="number"
                        value={breakTime}
                        placeholder="Enter break time"
                        onChange={(e) => setBreakTime(Number(e.target.value))}
                    />
                </label>
            </div>
            <p>
  {String(Math.floor(timeLeft / 60)).padStart(2, '0')}:
  {String(timeLeft % 60).padStart(2, '0')}
</p>
            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? 'Stop' : 'Start'}
            </button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Counter