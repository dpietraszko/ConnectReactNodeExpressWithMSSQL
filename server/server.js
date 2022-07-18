const express = require('express');
const Employee = require('../dbFiles/employee');
const dbOperation = require('../dbFiles/dbOperation');
const cors = require('cors');


let Pam = new Employee(1002, 'Pam', 'Beezley', 29, 'Female');

// console.log(Pam);

dbOperation.getEmployees().then(res => {
    console.log(res.recordset);
})

dbOperation.createEmployee(Pam);