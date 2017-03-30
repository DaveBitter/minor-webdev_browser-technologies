function search(items) {
	var searchBox = document.getElementById('search-box')
	var searchButton = document.getElementById('search-button')

	searchBox.style.width = '100%'
	searchButton.style.display = 'none'

	searchBox.addEventListener('keyup', function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}

		for (i = 0; i < items.length; i++) {
			var name = items[i].childNodes[1].innerHTML
			if (name.toLowerCase().includes(e.target.value)) {
				items[i].parentNode.style.display = 'block'
			} else {
				items[i].parentNode.style.display = 'none'
			}
		}

	})
}

module.exports = search