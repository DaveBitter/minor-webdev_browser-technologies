const express = require('express')
const router = express.Router()

const persons = require('../data.json')

router.post('/', (req, res) => {
	const query = req.body.query.toLowerCase()

	let results = []
	persons.map( (person) => {
		if (person.name.toLowerCase().includes(query)) {
			results.push(person)
		}
	})
	res.render('templates/search', {results, query})
})

module.exports = router;