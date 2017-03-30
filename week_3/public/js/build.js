(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var interceptLinks = require('./interceptLinks.js')
var search = require('./search.js')
var tiltjs = require('./tilt.js')

elements = {
	links: document.querySelectorAll('#person-list a')
}

search(elements.links)
interceptLinks(elements.links)
tiltjs()
},{"./interceptLinks.js":4,"./search.js":5,"./tilt.js":6}],2:[function(require,module,exports){
var buildInfo = function(data) {
	console.log(data)
	var template = [
		'<div id="info">',
		'<dl>',
		'<dt>Company</dt>',
		'<dd>' + data.company + '</dd>',
		'<dt>Phone</dt>',
		'<dd>' + data.phone + '</dd>',
		'<dt>Address</dt>',
		'<dd>' + data.address + '</dd>',
		'<dt>Registered</dt>',
		'<dd>' + data.registered + '</dd>',
		'</dl>',
		'<p>' + data.about + '</p>',
		'</div>'
	].join("\n");
	return template
}

module.exports = buildInfo
},{}],3:[function(require,module,exports){
var buildInfo = require('./buildInfo.js')

var getData = function(target) {
	var id = target.id
	// do api call
	aja().url('/person/' + id + '/api').on('success', function(data) {
		if(target.dataset.open == 'true') {
			var info = document.getElementById('info')
			info.parentElement.removeChild(info)
			target.dataset.open = 'false'

		} else {
			target.dataset.open = 'true'
			target.innerHTML += buildInfo(data)

		}
	}).go();
}

module.exports = getData
},{"./buildInfo.js":2}],4:[function(require,module,exports){
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
},{"./getData.js":3}],5:[function(require,module,exports){
function search(items) {
	var searchBox = document.getElementById('search-box')
	var searchButton = document.getElementById('search-button')

	searchBox.style.width = '100%'
	searchButton.style.display = 'none'

	searchBox.addEventListener('keyup', function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}

		for (i = 0; i < items.length; i++) {
			var name = items[i].childNodes[1].innerHTML
			if (name.toLowerCase().includes(e.target.value)) {
				items[i].parentNode.style.display = 'block'
			} else {
				items[i].parentNode.style.display = 'none'
			}
		}

	})
}

module.exports = search
},{}],6:[function(require,module,exports){
var tiltjs = function() {
	if (window.DeviceOrientationEvent) {
		var y = 0;

		window.addEventListener('devicemotion', function(e) {
			if (y - e.accelerationIncludingGravity.y > 2) {
				document.querySelectorAll('#info').forEach(function(el) {
					console.log(el)
					el.parentElement.dataset.open = 'false'
					el.parentElement.removeChild(el)
				})
			}
			y = e.accelerationIncludingGravity.y
		}, true);

	}
}

module.exports = tiltjs
},{}]},{},[1]);
