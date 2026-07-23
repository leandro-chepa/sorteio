const sql = require("mssql");
require("dotenv").config();
console.log(process.env.DB_SERVER);

const config = {
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT),

    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

module.exports = {
    sql,
    config
};