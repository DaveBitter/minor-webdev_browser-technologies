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