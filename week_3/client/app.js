var interceptLinks = require('./interceptLinks.js')
var search = require('./search.js')
var tiltjs = require('./tilt.js')

elements = {
	links: document.querySelectorAll('#person-list a')
}

search(elements.links)
interceptLinks(elements.links)
tiltjs()