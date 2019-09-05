const mysql = require('mysql2');

function connect() {
    const pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'PASSWORD',
        database: 'recipesproject',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
        port: 3306
      });

      return pool;
}

module.exports = {
    createConnection : connect 
}