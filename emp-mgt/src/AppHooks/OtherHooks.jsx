import { useState, UseEffect, useRef, useEffect } from "react";

export default function OtherHooksComp() {

    var [userName, setUserName] = useState("");
    var elementRef = useRef();
    
    var customData = useRef({
        userName: "Mayank",
        useAge: 10
    });
    
    useEffect(() => {
        elementRef.current.focus();
    }, []);
    
    function updateData() {
        setUserName(elementRef.current.value)
        // elementRef.current.style.color = "red";
        // elementRef.current.onmouseover = function() { alert("Hi")}
    }
    
    
    function updateRefData() {
        debugger;
        customData.current = {
            userName: "Anshul",
            useAge: 10
        };
    }
    
    return (
        <>
            <h1>User Name is {userName} {customData.current.userName}</h1>
            {/* <input type="text" onChange={(event) => {setUserName(event.target.value)}}/> */}
            <input type="text" ref={elementRef} onChange={updateData} />
            <input type="button" value="Change Ref Data" onClick={updateRefData} />
        </>
    )

}



// import { useState, useEffect, useRef } from "react";

// export default function OtherHooksComp()
// {
//     var [userName, setUserName]= useState("")
//     var elRef= useRef();
//     // useref always retains the data even on refresh

//     function UpdateData()
//     {
//         debugger;
//         console.log(elRef);
//         elRef.current.style.color="green";
//         setUserName(elRef.current.value)
//     }

//     return (
//         <>
//             <h2>Name of User: {userName}</h2>
//             {/* <input type="text" onChange={(event) => {setUserName(event.target.value)}}/> */}
//             <input type="text" ref={elRef} onChange={UpdateData}/>

//         </>
//     )
// }
