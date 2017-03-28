var buildInfo = require('./buildInfo.js')

var getData = function(target) {
	var id = target.id
	// do api call
	aja().url('/person/' + id + '/api').on('success', function(data) {
		console.log(data)
		if(target.dataset.open == "true") {
			var ul = target.childNodes == "ul"
			console.log(ul)
			ul.innerHTML = ""
		} else {
			target.dataset.open = "true"
			target.innerHTML += buildInfo(data)

		}
	}).go();
	// return the data
}

module.exports = getData