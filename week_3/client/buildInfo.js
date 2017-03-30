var buildInfo = function(data) {
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