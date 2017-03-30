var tiltjs = function() {
	if (window.DeviceOrientationEvent) {
		var y = 0;

		window.addEventListener('devicemotion', function(e) {
			if (y - e.accelerationIncludingGravity.y > 2) {
				document.querySelectorAll('#info').forEach(function(el) {
					el.parentElement.dataset.open = 'false'
					el.parentElement.removeChild(el)
				})
			}
			y = e.accelerationIncludingGravity.y
		}, true);

	}
}

module.exports = tiltjs