const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')

const port = 1337

const indexRouter = require('./routes/index.js')
const detailRouter = require('./routes/detail.js')

app
	.set('view engine', 'pug')
	.use(express.static('public'))
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({
		extended: true
	}))
	.use('/', indexRouter)
	.use('/person', detailRouter)
	.listen(process.env.PORT || port, () => {
		console.log('Started server on http://localhost:' + port)
	})