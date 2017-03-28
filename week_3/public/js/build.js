(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var interceptLinks = require('./interceptLinks.js')

elements = {
	links: document.querySelectorAll('#person-list a')
}

interceptLinks(elements.links)

},{"./interceptLinks.js":3}],2:[function(require,module,exports){
var getData = function(target) {
	var id = target.id
	// do api call
	aja().url('/person/' + id + '/api').on('success', function(data) {
		console.log(data)
	}).go();
	// return the data
}

module.exports = getData
},{}],3:[function(require,module,exports){
var getData = require('./getData.js')

function interceptLinks(links) {
	links.forEach(function(link) {
		link.addEventListener("click", function(e) {
			e.preventDefault()
			getData(e.target)
		})
	})
}

module.exports = interceptLinks
},{"./getData.js":2}]},{},[1]);
