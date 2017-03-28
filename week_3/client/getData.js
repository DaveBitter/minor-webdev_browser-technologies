var getData = function(target) {
	var id = target.id
	// do api call
	aja().url('/person/' + id + '/api').on('success', function(data) {
		console.log(data)
	}).go();
	// return the data
}

module.exports = getData