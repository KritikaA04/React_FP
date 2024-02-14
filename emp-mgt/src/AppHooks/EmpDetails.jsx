import details from "./employees.json";
import { useState, useEffect } from "react";

export default function EmployeeDetails() {
    
    var [employeeList, setEmployeeList] = useState(details);
    
    function deleteEmployee (eid) {
        const updatedList = [...employeeList];
        // updatedList.splice(index, 0); 
        // const updatedList = employeeList.filter((_, i) => i !== index);
        alert("deleted:" +eid)
        setEmployeeList(updatedList);
    };


    return (
        <div>
            {employeeList.map((employee) => {
                return (
                    <div className="card" style={{ width: "18rem", display: "inline-block", margin: "10px", padding: "10px" }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYWiJM9gMrv5z-T0IH7AIU0jk8NXRmTYhYGfpobi3ew&s" className="card-img-top" alt="Image" />
                        <div className="card-body">
                            <h5 className="card-title">{employee.name}</h5>
                            <p className="card-text">Employee Created On: {employee.createdAt}.</p>
                            {/* <a href="#" className="btn btn-primary">Delete</a> */}
                            <button onClick={() => deleteEmployee(employee.id)} className="btn btn-primary">Delete</button>
                            {/* <button onClick={function(){ deleteEmployee(employee.id)}} className="btn btn-primary">Delete</button> */}
                            
                        </div>
                    </div>
                )
            })}
        </div>
    )
}









// import details from './employees.json';
// import { useState, useEffect } from 'react';

// export default function EmpDetails()
// {
//     const [users, setUsers] = useState(details)
    
    
//         return (
//             <div>
//                 <h1>User Details</h1>
//                 <ul>
//                 {users.map(user => (
//                     <li key={user.id}>
//                     <img src={user.avatar} alt={user.name} />
//                     <p>Name: {user.name}</p>
//                     <p>Created At: {user.createdAt}</p>
//                     </li>
//                 ))}
//                 </ul>
//             </div>
//         )
        
    
// }

// const updatedList = employeeList.filter((_, i) => i !== index);
