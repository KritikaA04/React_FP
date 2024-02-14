import { useState, useEffect } from "react";

export default function WorkingWithCounter() {

    var [counter, setCounter] = useState(0);
    
    useEffect(() => {
    // runs on re-rendering and initial rendering as well
    // first rendering is called without any parameter
        console.log("hello, increment")
    }, [])

    useEffect(() => {
        // we can have multiple use-effect but this one is rendered only at first
        // once during the lifecycle
        // therefore write code which has to be executed only once
        console.log("hello, increment-once")
        setInterval(()=>{
            incrementCounter();
        },1000)

    }, [])
    
    function incrementCounter() {
        setCounter((initialCounterValue) => {
            return initialCounterValue + 1
        })
    }
    
    return (
        <div>
            <h1>Counter Value is {counter}</h1>
            <input type="button" value="Increment" onClick={incrementCounter} />
        </div>
    )
    
}