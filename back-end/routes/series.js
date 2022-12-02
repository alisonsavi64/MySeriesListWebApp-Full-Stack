const express = require('express');
const db = require('../database');

const router = express.Router();

router.get('/', async (req, res) => {
	
	try {

		let results = await db.all();
		res.json(results);

	}catch (err){
		console.log(err)
		res.status(500).send({response: "Can't make the query to get all series"})
	}
	

});

router.get('/:id', async(req, res) => {

	try{

		let results = await db.specificSerie(req.params.id);
		res.json(results)

	}catch(err) {

		console.log(err)
		res.status(500).send({response: "Can't make the query for specific serie"})
	};

});

module.exports = router;