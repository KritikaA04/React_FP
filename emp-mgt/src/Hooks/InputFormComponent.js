import { useState } from "react";

export default function InputFormComponent() {
    
    var [userDetails, setUserDetails] = useState({
        userName: "Mayank",
        userAge: "",
        userDesignation: "",
        userSalary: "",
        userBonus: ""
    });
    
    function submitDetails() {
        alert("User Name is: " + userDetails.userName)
        alert("User Age is: " + userDetails.userAge)
        alert("User Designation is: " + userDetails.userDesignation)
        alert("User Salary is: " + userDetails.userSalary)
        alert("User User Bonus is: " + userDetails.userBonus)
    }
    
    function updateData(event) {
        debugger;
        setUserDetails({
            ...userDetails,
            [event.target.id]: event.target.value
        })
    }

    return (
        <div>
            <b style={{width: "250px", display:"inline-block"}}>Name</b><input type="text" data-other="Sample" data-info="userName" value={userDetails.userName} onChange={updateData} /><br/><br/>
            <b style={{width: "250px", display:"inline-block"}}>Age</b><input type="text" data-other="Sample" data-info="userAge" value={userDetails.userAge} onChange={updateData} /><br/><br/>
            <b style={{width: "250px", display:"inline-block"}}>Designation</b><input type="text" data-other="Sample" data-info="userDesignation" value={userDetails.userDesignation} onChange={updateData}/><br/><br/>
            <b style={{width: "250px", display:"inline-block"}}>Salary</b><input type="text" data-other="Sample" data-info="userSalary" value={userDetails.userSalary}  onChange={updateData}/><br/><br/>
            <b style={{width: "250px", display:"inline-block"}}>Bonus</b><input type="text" data-other="Sample" data-info="userBonus" value={userDetails.userBonus}  onChange={updateData}/><br /><br />
            
            <input type="button"onClick={submitDetails} value="Save to Database" />
        </div>
    )

}