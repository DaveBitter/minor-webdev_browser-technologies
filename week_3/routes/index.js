const express = require('express')
const router = express.Router()

const data = require('../data.json')

router.get('/', (req, res) => {
	const persons = data
	const query = ''
	res.render('templates/index', {persons, query})
})

router.post('/', (req, res) => {
	const query = req.body.query.toLowerCase()

	let results = []
	data.map( (person) => {
		if (person.name.toLowerCase().includes(query)) {
			results.push(person)
		}
	})

	const persons = results
	res.render('templates/index', {persons, query})
})


module.exports = router