var buildInfo = function(data) {
	var template = [
		'<dl>',
		'<dt>Company</dt>',
		'<dd>' + data.company + '</dd>',
		'<dt>Phone</dt>',
		'<dd>' + data.phone + '</dd>',
		'<dt>Address</dt>',
		'<dd>' + data.adrress + '</dd>',
		'</dl>'
	].join("\n");
	return template
}

module.exports = buildInfo