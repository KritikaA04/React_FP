export function saveEmployeeList(employeeList) {
    return {
        type: "SAVE_EMPLOYEES",
        payload: employeeList
    }
}

export function deleteAllEmployees() {
    return {
        type: "DELETE_ALL_EMPLOYEES"
    }
}

export function deleteEmployees(employeeId) {
    return {
        type: "DELETE_EMPLOYEES",
        payload: employeeId
    }
}