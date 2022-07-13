const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'hangar11',
	database: 'user_crud' });

module.exports = connection;
