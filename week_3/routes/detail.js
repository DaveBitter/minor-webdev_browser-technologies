const express = require('express')
const router = express.Router()

const persons = require('../data.json')

router.get('/:id', (req, res) => {
	const id = req.params.id

	const person = persons.find(function(result) {
		return result._id == id
	});

	res.render('templates/detail', {person})
})

router.get('/:id/api', (req, res) => {
	const id = req.params.id

	const person = persons.find(function(result) {
		return result._id == id
	});

	res.send(person)
})

module.exports = router;