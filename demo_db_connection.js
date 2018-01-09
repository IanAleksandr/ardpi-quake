var mysql = require ("mysql");

var con = mysql.createConnection (
{
	host: "localhost",
	user: "root",
	password: ""
});

con.connect (function(err)
{
	if (err) throw err;
	console.log("Connected!");
});

/*
As metioned by Akshay Vijay Jain above,

npm config set strict-ssl false

TURNING OFF SSL BEFORE INSTALLING THE LATEST VERSION

Then install the latest version

npm install -g npm@latest

INSTALL SUCCESS!!

See the screenshots added for clarity.

npm install mysql

-- si te sale error ir a project01> npm init
seguir la secuencia y luego
npm install mysql
*/