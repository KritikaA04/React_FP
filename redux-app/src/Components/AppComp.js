import { useState, useEffect } from "react";
import * as actions from "../Actions/employeeAction";

import { connect } from "react-redux";
import Axios from "axios";

function AppComp(props) {
    
    useEffect(() => {
        Axios.get("http://localhost:3000/employees").then((response) => {
            props.saveEmployeeList(response.data)
        });
    }, []);
    
    function deleteAllEmployees() {
        // Trigger Action to Delete All Employees
    }
    
    function deleteEmployee() {
        // Trigger Action to delete Employee
    }
    
    return (
        <>
            {props.employees.map((employee) => {
                return (
                    <>
                        <h1>Employee Name: {employee.name}</h1>
                        <input type="button" onClick={() => deleteEmployee(employee.id)} value="Delete" />
                    </>
                )
            })}
            
            <input type="button" value="Delete All Employee" onClick={deleteAllEmployees} />
        </>
    )
}

function mapStoreToProps(store) {
    return {
        employees: store.employees,
        flight: store.flight
    }
}

const ConnectedComponent = connect(mapStoreToProps, actions)(AppComp)

export default ConnectedComponent;