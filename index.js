const employee = {
    name: "Howard Dean",
    streetAddress: "111 Main St New York New York 10004",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee,
        [key]:value,
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
        const newEmployee = {...employee};
        delete newEmployee[key];
        return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee[key];
    return employee
}