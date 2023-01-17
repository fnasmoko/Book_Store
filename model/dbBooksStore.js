const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '17kosongsembilan',
    database: 'books_store'
})

module.exports = db