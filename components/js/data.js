const Data = {

	fetch(url) {
		let fetchData = () => fetch(url)
		                    .then(result => result.json())
		                    .then(body => body)

		return Promise.resolve(fetchData())
	},

	render(props) {
		let renderParent = document.querySelectorAll(props.parent)

		renderParent.forEach(element => {
		element.innerHTML += props.child
		})
	}
}

export default Data
