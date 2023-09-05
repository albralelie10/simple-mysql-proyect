const mysql= require("mysql")

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Albralelie12@",
    database:"test",
});

module.exports = db;
