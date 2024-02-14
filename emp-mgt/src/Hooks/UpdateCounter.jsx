import { useState } from "react";

export default function UpdateCounter() {
    var [count, setCount] = useState(0);
    // usestate returns 2 values
    // getter and setter
    // setter is the function that sets the new value
    // (count, setcount) are getter and setter respectively

    var [empDetails, setEmpDetails] = useState({
        userName: "Kri",
        userDesignation: "sde",
        userAge: 21
    })
    
    function incrementCounter() {

        // this is direct method, not very efficient
        // setCount(count + 1)

        // better way since new count depends on prev
        // then better use function

        // setCount((count) => {
        //     return count+1
        // })

        setCount((oldCounterValue) => {
            
            if (oldCounterValue == 10) {
                return 100;
            }
            return oldCounterValue + 1;
            
        });

        console.log(count)
    }
    

    const handleButtonClick = () => {
        // immutablitiy, obj should not be updated
        // not updating original, creating a copy by spread operator 
        setEmpDetails((prevDetails) => ({
          ...prevDetails,
          userName: 'Kritika'
        }));
    };

    // function changeName() {
    //     // Immutability = Object should not be mutated...
        
    //     var newObject = {
    //         ...empDetails,
    //         userName: "TechnoFunnel"
    //     }
        
    //     setEmpDetails(newObject)
    // }

    return (
        <div>
            <h1>The Counter is {count}</h1>
            <input type="button" onClick={incrementCounter} value="Increment" />

            <h2>Employee Details</h2>
            <p>Username: {empDetails.userName}</p>
            <p>Designation: {empDetails.userDesignation}</p>
            <p>Age: {empDetails.userAge}</p>
            
            <button onClick={handleButtonClick}>Change Username</button>
        </div>
    )
}