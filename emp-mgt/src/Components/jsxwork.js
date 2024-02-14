import React from "react";

// Multi Line JSX, React.createElement, Creating First React Component / Componentizing our application. 

export default function FirstComponent()
{
    // return <h2>this is the first component</h2>
    return React.createElement("div", {}, [
        React.createElement("div", {}, React.createElement("h1",{},"this is main content without JSX")),
        React.createElement("div", {}, React.createElement("p",{},React.createElement("h2",{},"welcome back"))),
    ])
}
// in react we render all the functions like html tags only
// even tho the function is rendered first, and then declared it is working due to the concept of hoisting

export function FirstComponentEquivalant() {
    return (
        <div className="sample" id="some_id" data-info="Kri" >
            <div>
                <h1>This is Main Content with JSX</h1>
            </div>

            <div>
                <p>
                    <h2>Welcome Back</h2>
                </p>
            </div>
        </div>
    )
}