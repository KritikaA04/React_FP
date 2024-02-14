export default function Iteration()
{

    var employees = [{
        name: "Mayank",
        age: 30,
        designation: "Trainer"
    }, 
    {
        name: "Anshul",
        age: 37,
        designation: "Trainer"
    }, 
    {
        name: "Aniket",
        age: 31,
        designation: "Trainer"
    }, 
    {
        name: "Meha",
        age: 35,
        designation: "Trainer"
    }, 
    {
        name: "Aniket",
        age: 40,
        designation: "Trainer"
    }];
    
    function employeeNameJsx() 
    {
        // return emp = employees.map(e => 
        //     (
        //         <div>
        //             <h3>Employee Name is: {e.name}</h3>
        //             <h3>Employee Name is: {e.age}</h3>
        //             <h3>Employee Name is: {e.designation}</h3>
        //         </div>
        //     )
        // );
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>age</th>
                        <th>designation</th>
                    </tr>
                </thead>
                <tbody>
                   { employees.map((obj)=>(
                    <tr key={obj.name}>
                        <td>{obj.name}</td>
                        <td>{obj.age}</td>
                        <td>{obj.designation}</td>
                    </tr>
                   ))}
                </tbody>
            </table>
        )
        
    }

    return (
        <div>
            <h1>Total Number of Employees: {employees.length}</h1>
            <h2>Following is the List of Employees in the company: </h2>
            {employeeNameJsx()}
        </div>
    )
    
}


// var emp = ["Kri","Aarya","Anu","Shay"]

// function employeeNames() {
//     var e=[];
//     for(let i=0;i< emp.length;i++)
//     {
//         e.push(<h3>{emp[i]}</h3>)
//     }
//     return e;
// }