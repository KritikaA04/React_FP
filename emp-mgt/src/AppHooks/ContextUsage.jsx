import { useState } from "react";

// a container has the data that can be used anywhere in the entire hierarchy

export default function GrandParents() {
    
    var [details, setDetails] = useState({
        city: "Bhopal",
        surName: "Agrawal"
    });
    
    return (
        <div>
            <h1>This is Grand Parents</h1>
            <h6>My City is {details.city}</h6><hr />
            <Parents details={details} setDetails={setDetails}></Parents>
        </div>
    )
}

function Parents(props) {
    return (
        <div>
            <h2>This is Parents</h2><hr />
            <Children details={props.details} setDetails={props.setDetails}></Children>
        </div>
    )
}

function Children(props) {
    return (
        <div>
            <h3>This is Children</h3>
            <GrandChildren details={props.details} setDetails={props.setDetails}></GrandChildren>
        </div>
    )
}

function GrandChildren(props) {
    return (
        <div>
            <h4>This is Grand Children</h4><hr />
            <GrandGrandChildren details={props.details} setDetails={props.setDetails}></GrandGrandChildren>
        </div>
    )
}

function GrandGrandChildren(props) {
    
    function UpdateData() {
        props.setDetails({
            ...props.details,
            city: "Delhi"
        })
    }
    
    return (
        <div>
            <h5>This is Grand Children</h5>
            <h6>My City is {props.details.city}</h6>
            <input type="button" value="Update City" onClick={UpdateData} />
        </div>
    )
}