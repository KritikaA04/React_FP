import details from "./employees.json";
import { useState, useEffect } from "react";
import Axios from "axios";
import AddEmp from "./AddEmp";
import FilterEmpList from "./FilterEmpList"

export default function EmployeeDetails() {
    
    var [employeeList, setEmployeeList] = useState([]);
    var [filteredList, setFilteredList] = useState([]);
    
    useEffect(() => {
        // Axios.get("http://localhost:3000/employees").then((response) => {
        //     setEmployeeList(response.data)
        // })
        updateEmponScreen();
    }, [])
    
    function deleteEmployee(id) {
        const newEmp = employeeList.filter((employee) => {
            return employee.id != id;
        })
        setEmployeeList(newEmp)

        // var temp=employeeList.filter(employee=>employee.id!=id)
        // setEmployeeList(temp)

        // alert("Deleted: " + id)
    }

    function updateEmponScreen()
    {
        Axios.get("http://localhost:3000/employees/").then((response) => {
            setEmployeeList(response.data)
            setFilteredList(response.data)
        })
    }

    function deleteEmployeeAxios(empId)
    {
        Axios.delete("http://localhost:3000/employees/"+empId).then(() => {
            alert("Employee with " + empId + " got deleted");
            updateEmponScreen();
        })
    }
    
    function filterEmployee(filterText) {
        // var filteredList = [];
        if (filterText == "") {
            filteredList = employeeList;
        } 
        else {
            filteredList = employeeList.filter((employee) => {
                // return employee.name.toLowerCase().includes(filterText.toLowerCase());
                return employee.name.indexOf(filterText) > -1;
            })
        }
        setFilteredList(filteredList);
    }

    return (
        
        <>
            <h2>The List of Employee is given Below: ({employeeList.length})</h2>
            <AddEmp updateEmponScreen={updateEmponScreen} ></AddEmp> <br></br>
            <FilterEmpList filterEmployee={filterEmployee} ></FilterEmpList>
            {employeeList.map((employee) => {
                return (
                    <div className="card" style={{ width: "18rem", display: "inline-block", margin: "10px", padding: "10px" }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYWiJM9gMrv5z-T0IH7AIU0jk8NXRmTYhYGfpobi3ew&s" className="card-img-top" alt="Image" />
                        <div className="card-body">
                            <h5 className="card-title">{employee.name}</h5>
                            <p className="card-text">Employee Created On: {employee.createdAt}.</p>
                            {/* <input type="button" className="btn btn-primary" value="Delete" onClick={function () { deleteEmployee(employee.id) }} /> */}
                            <input type="button" className="btn btn-primary" value="Delete" onClick={function () { deleteEmployeeAxios(employee.id) }} />
                        </div>
                    </div>
                )
            })}
        </>
    )
}