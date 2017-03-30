var getData = require('./getData.js')

function interceptLinks(links) {
	for (i = 0; i < links.length; i++) {
		links[i].addEventListener("click", function(e) {
			e.preventDefault()
			getData(e.target)
		})
	}
}

module.exports = interceptLinks