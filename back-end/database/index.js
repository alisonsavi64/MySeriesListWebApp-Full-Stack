const mysql = require('mysql');

const con = mysql.createConnection({
	host:"localhost",
	user:'root',
	password:'password',
	database: 'portfolio'

});

con.connect(function(err) {

	if (err) throw err;
	console.log("Connected!");

});

let dataToBeSend = {}

dataToBeSend.all = () => {

	return new Promise((resolve,reject) => {

		con.query('SELECT * FROM series', (err, results) => {

			if (err){
				return reject(err);
			}
			return resolve(results);

		});

	});

}

dataToBeSend.specificSerie = (id) => {


	return new Promise((resolve, reject) => {

		con.query(`SELECT * FROM series WHERE serieId = ${id}`, (err, results) => {

			if (err) {
				return reject(err);
			}
			return resolve(results);

		});

	});

}

module.exports = dataToBeSend;

