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