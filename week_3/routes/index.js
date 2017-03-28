const express = require('express')
const router = express.Router()

const persons = require('../data.json')

router.get('/', (req, res) => {
	res.render('templates/index', {persons})
})

module.exports = router