const mysql = require("mysql");

module.exports={
    connection: null,
    async connect() {
        this.connection =mysql.createConnection({
            host:"127.0.0.1",
            user:"root",
            password: "Priya123",
            database: "student_mentor"
           
        })
        
    }
}