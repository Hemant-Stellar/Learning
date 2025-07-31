import {useEffect, useState} from 'react';

function Counter() {
    const [count,setCount] = useState(0);
    function handleIncrement(){
        setCount(count+1);
    }

    useEffect(()=>{
        if(count>15){
            throw new Error('Count is greater than 5');
        }
    },[count]);

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </>
    );
}
export default Counter;