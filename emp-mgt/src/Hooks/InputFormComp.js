// import { useState } from "react";

// export default function InputFormComp()
// {
//     function submitDetails() {
        
//         alert("User Name is: ")
//         alert("User Age is: ")
//         alert("User Designation is: ")
//         alert("User Salary is: ")
//         alert("User User Bonus is: ")
//     }   
    
    
//     return (
//         <div>
//             <b style={{width: "250px", display:"inline-block"}}>Please Enter Name</b><input type="text" /><br/><br/>
//             <b style={{width: "250px", display:"inline-block"}}>Please Enter Age</b><input type="text" /><br/><br/>
//             <b style={{width: "250px", display:"inline-block"}}>Please Enter Designation</b><input type="text" /><br/><br/>
//             <b style={{width: "250px", display:"inline-block"}}>Please Enter Salary</b><input type="text" /><br/><br/>
//             <b style={{width: "250px", display:"inline-block"}}>Please Enter Bonus</b><input type="text" /><br /><br />
            
//             <input type="button" onClick={submitDetails} value="Save to Database" />
//         </div>
//     )
// }





import { useState } from "react";

export default function InputFormComponent() {
    
    var [userName, setUserName] = useState("Mayank");
    var [userAge, setUserAge] = useState("10");
    var [userDesignation, setUserDesignation] = useState("VP");
    var [userSalary, setUserSalary] = useState("10");
    var [userBonus, setUserBonus] = useState("1");
    
    function submitDetails() {
        
        alert("User Name is: " + userName)
        alert("User Age is: " + userAge)
        alert("User Designation is: " + userDesignation)
        alert("User Salary is: " + userSalary)
        alert("User User Bonus is: " + userBonus)
    }

    return (
        <div>
            <b style={{width: "250px", display:"inline-block"}}>Name</b><input type="text" value={userName} onChange={(event) => { setUserName(event.target.value) }} /><br/><br/>
            <b style={{width: "250px", display:"inline-block"}}>Age</b><input type="text" value={userAge}  onChange={(event) => { setUserAge(event.target.value) }} /><br/><br/>
            <b style={{width: "250px", display:"inline-block"}}>Designation</b><input type="text" value={userDesignation}  onChange={(event) => { setUserDesignation(event.target.value) }}/><br/><br/>
            <b style={{width: "250px", display:"inline-block"}}>Salary</b><input type="text" value={userSalary}  onChange={(event) => { setUserSalary(event.target.value) }}/><br/><br/>
            <b style={{width: "250px", display:"inline-block"}}>Bonus</b><input type="text" value={userBonus}  onChange={(event) => { setUserBonus(event.target.value) }}/><br /><br />
            
            <input type="button"onClick={submitDetails} value="Save to Database" />
        </div>
    )

}