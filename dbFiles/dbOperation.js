const config = require('./dbconfig');
const sql = require('mssql');

const getEmployees = async() => {
    try {
        let pool = await sql.connect(config);
        let employees = pool.request().query("SELECT * from EmployeeDemographics");
        console.log(employees);
        return employees;

        // return employees.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

const createEmployee = async(Employee) => {
    try {
        let pool = await sql.connect(config);
        let employees = pool.request()
        .query(`INSERT INTO EmployeeDemographics VALUES
        (${Employee.EmployeeID}, '${Employee.Firstname}', '${Employee.Lastname}', ${Employee.Age}, '${Employee.Gender}')
        `);
        console.log(employees);
        return employees;

        // return employees.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getEmployees : getEmployees,
    createEmployee : createEmployee
}