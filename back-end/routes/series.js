const express = require('express')
const db = require('../database')

const router = express.Router()

router.get('/', async (req, res) => {
	
	try {

		let results = await db.all();
		res.json(results);

	}catch (err){
		console.log(err)
		res.status(500).send({response: "Error"})
	}
	

})

module.exports = router