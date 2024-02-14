import { useState, useEffect } from "react";

export default function MultipleStateVariables() {
    var [counter, setCounter] = useState(0);
    var [name, setName] = useState("Mayank");
    
    useEffect(() => {
        debugger;
        console.log("Counter Updated to " + counter)
    }, [counter])
    
    useEffect(() => {
        debugger;
        console.log("Name Updated to " + name)
    }, [name])
    
    useEffect(() => {
        debugger;
        console.log("One of the variable updated in the code")
    }, [name, counter])
    
    return (
        <div>
            <h1>The Counter Value is {counter}</h1>
            <h1>The Name Value is {name}</h1>
            <input type="button" value="Change Name" onClick={() => setName("TechnoFunnel")} />
            <input type="button" value="Change Counter" onClick={() => setCounter(counter + 1)} />
        </div>
    )
}