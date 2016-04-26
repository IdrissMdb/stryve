import moment from 'moment'

module.exports = {

	/**
	 * Formats a UTC datestamp to local time
	 *
	 * @requires moment.js - http://momentjs.com/docs/
	 * @param {string} value
	 * @param {string} format - optional
	 * @return {string}
	 */
	formatDateTime: (value, format) => {
		if(!format)
			format = 'D MMM YYYY'

		let localTime = moment.utc(value).toDate();
    	return moment(localTime).format(format);
	},

	/**
	 * Captilizes the first charatcer of a string
	 *
	 * @param string $value
	 * @return boolean
	 */
	capitalizeFirstLetter: value => {
		if(typeof value != 'string')
			throw new Error("The provided value is not a string")

	    return value.charAt(0).toUpperCase()
	},

	/**
	 * Tests whether or not the value passed is an empty string
	 *
	 * @param mixed $value
	 * @return boolean
	 */
	isEmptyString: value => {
	 	return (value === '')? true : false
	},

	/**
	 * Tests whether or not the value passed is 'undefined' or 'null'
	 * Source - http://stackoverflow.com/questions/2647867/how-to-determine-if-variable-is-undefined-or-null
	 * 
	 * @param mixed $value
	 * @return boolean
	 */
	isNullOrUndefined: value => {
		return value == null
	},

	/**
	 * Tests whether a value is numeric or not
	 *
	 * @param mixed $value
	 * @return bool
	 */
	isNumeric: value => {
	  	return !isNaN(parseFloat(value)) && isFinite(value)
	},

	/**
	 * Determines if an object is empty or not
	 *
	 * @param object $obj
	 * @return bool
	 */
	isEmptyObject: obj => {
		if(typeof obj != 'object')
			return false

	    for(let prop in obj) {
	        if(obj.hasOwnProperty(prop))
	            return false
	    }
	    return true
	},

	/**
	 * Converts a http string to a clickable external link
	 *
	 * @param string $text
	 * @return string
	 */
	linkify: text => {
	    let urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig
	    return text.replace(urlRegex, function(url) {
	        return '<a class="channel-event-link" target="_blank" href="' + url + '">' + url + '</a>'
	    })
	},

	/**
	 * Updates the text displayed in the document title
	 *
	 * @param string $text
	 * @return void
	 */
	updateTitleText: text => {
		window.document.title = text
	},

	/**
	 * Focus the element that has the specified element_id
	 *
	 * @param string $element_id
	 * @return void
	 */
	focusOnElement: element_id => {
		setTimeout(() => {
			let el = window.document.getElementById(element_id)
			if(el) el.focus()
		}, 5)
	},

	/**
	 * Update an elements value
	 *
	 * @param {string} $elemet_id
	 * @param {string} $value
	 * @return void
	 */
	 updateElementsValue: (element_id, value) => {
	 	window.document.getElementById(element_id).value = value
	 },

	/**
	 * Make an elements scrollTop the same its scrollHeight
	 *
	 * @param {object} $container
	 * @return void
	 */
	letScrollTopEqualScrollHeight: container => {
		setTimeout(() => {
			container.scrollTop = container.scrollHeight
		}, 5)
		
	},

	/**
	 * Creates and emits a new notification
	 *
	 * @param string $title
	 * @param object $options
	 * @return void
	 */
	notification: (title, options) => {
		let n = new Notification(title, {
		  body: options.body,
		  icon: './src/assets/img/logo-450x450.png'
		})
		
		// close the notification after 5 secs
		setTimeout(n.close.bind(n), 5000)
	},
	
	/**
	 * Returns the window's width
	 *
	 * @source - http://stackoverflow.com/questions/8221172/whats-the-raw-javascript-equivalent-to-jquerys-window-width
	 * @return {int}
	 */
	getWindowWidth: () => {
		let docElemWidth = window.document.documentElement.clientWidth,
        body = window.document.body
    	return window.document.compatMode === "CSS1Compat" && docElemWidth || body && body.clientWidth || docElemWidth;
	},

	/**
	 * Returns the window's height
	 *
	 * @source - http://stackoverflow.com/questions/8221172/whats-the-raw-javascript-equivalent-to-jquerys-window-width
	 * @return {int}
	 */
	getWindowHeight: () => {
		let docElemHeight = window.document.documentElement.clientHeight,
        body = window.document.body
    	return window.document.compatMode === "CSS1Compat" && docElemHeight || body && body.clientHeight || docElemHeight;
	},

	/**
	 * Returns an elements width
	 *	 
	 * @return {int}
	 */
	getElementWidth: () => {
		// window.document.getElementById(element_id)

	},

	/**
	 * Returns an elements height
	 *	 
	 * @return {int}
	 */
	getElementHeight: () => {

	},

	/**
	 * Sets an elements height
	 *
	 * @param {string} $element
	 * @param {int} $height
	 * @return void
	 */
	setCssProperty: (element, height) => {
		let el = window.document.getElementById(element)

		el.style.height = height + 'px'
	},

	/**
	 * Returns an elements height
	 *	 
	 * @param {string} $element
	 * @param {string} $property
	 * @param {mixed} $value
	 * @return void
	 */
	setElementCssProperty: (element, property, value) => {
		let el = window.document.getElementById(element)
		if(el) el.style[property] = value
	},

	/**
	 * Hide an element
	 *	 
	 * @return void
	 */
	hideAnElement: element => {

	},

	/**
	 * Dispatches the window resize event
	 *	 
	 * @return void
	 */
	fireWindowResizeEvent: () => {
		setTimeout(() => {
			window.dispatchEvent(new Event('resize'))
		}, 5)
	},

	/**
	 * Destroys any tooltips on the DOM
	 *	 
	 * @return void
	 */
	hideTooltips: () => {
		let elements = ['tooltip', 'tooltip-pointer']

		for(let i = 0; i < elements.length; i++) {
			let el = document.getElementsByClassName(elements[i])
	    	while(el.length > 0)
	        	el[0].parentNode.removeChild(el[0])
		}
	},

	/**
	 * Destroys a class element on the DOM
	 *	 
	 * @return void
	 */
	removeClassElementFromDom: element => {
		let el = document.getElementsByClassName(element)
    	while(el.length > 0)
        	el[0].parentNode.removeChild(el[0])
	},

	/**
	 * Display's a modal overlay 
	 * 
	 */
	showModalOverlay: () => {
		let overlay = document.createElement('div')
		overlay.className += ' modal-overlay'
		document.body.appendChild(overlay)
	}

};

