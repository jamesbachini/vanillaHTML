export const utils = {

	setTitle: async (title) => {
		document.title = title;
	},
	
	setDescription: async (description) => {
		document.querySelector('meta[name="description"]').setAttribute('content', description); 
	},
	
	toggleFullScreen: async () => {
		var doc = window.document;
		var docEl = doc.documentElement;
		var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
		var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
		if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
			requestFullScreen.call(docEl);
		} else {
			cancelFullScreen.call(doc);
		}
	},

	copyToClipboard: async (containerid) => {
		let range;
		if (document.selection) { 
			range = document.body.createTextRange();
			range.moveToElementText(document.getElementById(containerid));
			range.select().createTextRange();
			document.execCommand("Copy"); 
		} else if (window.getSelection) {
			range = document.createRange();
			range.selectNode(document.getElementById(containerid));
			window.getSelection().removeAllRanges();
			window.getSelection().addRange(range);
			document.execCommand("Copy");
		}
	},


	cleanString: (stringRaw) => {
		let stringClean = stringRaw;
		stringClean = String(stringClean);
		stringClean = stringClean.split(/[^ .$*+?\\\-_:/&=,{}@a-zA-Z0-9\s]/).join('');
		stringClean = stringClean.substr(0, 255);
		return stringClean;
	},

	randID: () => {
		return (Math.random().toString(36).substring(7) + Math.random().toString(36).substring(7) + Math.random().toString(36).substring(7));
	},

	loadModule: async (url, elementID, modifierFunc=false) => {
		await fetch(url)
		.then(response => response.text())
		.then((responseText) => {
			if (modifierFunc) {
				responseText = modifierFunc(responseText);
			}
			let responseJS = false;
			if (responseText.includes('<script>')) {
				const jsSplit = responseText.split('<script>');
				responseText = jsSplit[0];
				responseJS = jsSplit[1].split('</script>')[0];
			}
			document.getElementById(elementID).innerHTML = responseText;
			if (responseJS) {
				const jsFunc = new Function (responseJS);
				jsFunc();
			}
		});
	},

	loadJSON: async (url) => {
		return new Promise(resolve => {
			fetch(url)
			.then(response => response.json())
			.then(json => resolve(json));
		});
	},

	addCanonical: async (fullURL=false) => {
		if (!fullURL) fullURL = document.location;
		const c = document.createElement('link'); 
		c.rel = 'canonical'; 
		c.href = fullURL; 
		document.head.appendChild(c);
	},

	getQueryParams: () => {
		const qs = document.location.search.split("+").join(" ");
		const params = {};
		let tokens;
		const regex = /[?&]?([^=]+)=([^&]*)/g;
		while (tokens = regex.exec(qs)) { // eslint-disable-line
			params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
		}
		return params;
	},

	scrollTo: (anchor=false) => {
		if (!anchor && String(document.location).includes('#')) anchor = String(document.location).split('#')[1];
		if (anchor) document.location.hash = anchor;
	},

	errorHandling: async (error) => {
		console.log(`Error: ${error}`);
		const errorReport = document.getElementById('error-report');
		errorReport.classList.remove('hidden');
		errorReport.innerHTML = `⚠️ ${error}`;
		setTimeout(() => { errorReport.classList.add('hidden'); }, 10000);
	},

	launchModal: async (htmlContent) => {
		document.getElementById('modal-content').innerHTML = htmlContent;
		document.getElementById('modal').classList.remove('hidden');
		document.getElementById('modal-close').onclick = () => {
			document.getElementById('modal').classList.add('hidden');
		};
	},

	titleCase: (phrase) => {
		return phrase.toLowerCase().split('-').join(' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
	},

	camelCase: (str) => {
		return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
			return index === 0 ? word.toLowerCase() : word.toUpperCase();
		}).replace(/\s+/g, '');
	},

	eventListener: async (id,func) => {
		document.addEventListener(id, func);
	},

	dispatchEvent: async (id,detail={}) => {
		const newEvent = new CustomEvent(id,detail);
		document.dispatchEvent(newEvent);
	},

};
