import { useState, createContext, useContext } from "react";

// a container has the data that can be used anywhere in the entire hierarchy

const UserContext = createContext();

export default function GrandParents() {
    
    var [details, setDetails] = useState({
        city: "Bhopal",
        surName: "Agrawal"
    });
    
    return (
        <div>
            <UserContext.Provider value={{details:details, setDetails:setDetails}}>
            <h1>This is Grand Parents</h1>
            <h2>My City is {details.city}</h2><hr />
            <Parents></Parents>
            </UserContext.Provider>
        </div>
    )
}

function Parents() {
    return (
        <div>
            {/* <h2>This is Parents</h2><hr /> */}
            <Children></Children>
        </div>
    )
}

function Children() {
    return (
        <div>
            {/* <h3>This is Children</h3> */}
            <GrandChildren></GrandChildren>
        </div>
    )
}

function GrandChildren() {
    return (
        <div>
            {/* <h4>This is Grand Children</h4><hr /> */}
            <GrandGrandChildren></GrandGrandChildren>
        </div>
    )
}

function GrandGrandChildren() {
    const inputData = useContext(UserContext)

    function updateData() {
        inputData.setDetails({
            ...inputData.details,
            city: "Delhi"
        })
    }
    
    return (
        <div>
            <h2>This is Grand Children</h2>
            <h2>My City is {inputData.details.city}</h2>
            <input type="button" value="Update City" onClick={updateData} />
        </div>
    )
}