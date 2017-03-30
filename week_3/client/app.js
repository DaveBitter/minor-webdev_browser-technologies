var interceptLinks = require('./interceptLinks.js')

elements = {
	links: document.querySelectorAll('#person-list a')
}

interceptLinks(elements.links)
