import React, {useCallback, useState} from 'react'
const a = new Set()
function Callback(){
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(1000)
    const handleIncrementC = useCallback(() => {
        setCount(count + 1)
    },[count])
    const handleDecrementC = useCallback(
        () => {
            setCount(count - 1)
        },
        [count]
    )
    const handleIncrementN = useCallback(() => {
        setNumber(number + 1)
    },[number])
    const handleDecrementN = useCallback(
        () => {
            setNumber(number - 1)
        },
        [number]
    )
    a.add(handleIncrementN)
    a.add(handleIncrementC)
    a.add(handleDecrementC)
    a.add(handleDecrementN)
    alert(a.size)
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrementC}>Increment</button>
            <button onClick={handleDecrementC}>Decrement</button>
            <h1>Number: {number}</h1>
            <button onClick={handleIncrementN}>Increment</button>
            <button onClick={handleDecrementN}>Decrement</button>
        </div>
    )

}