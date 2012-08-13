window._gaq = window._gaq || [];

window.GAExperiments = {
	experiments: [],
	
	add: function (options) {
		if (typeof $ === 'undefined' || !window.localStorage || !options.samples || !options.slot) {
			return;
		}
		var id = localStorage.getItem('ga-experiment-' + options.slot);
		if (!id) {
			id = Math.random();
			localStorage.setItem('ga-experiment-' + options.slot, id);
		}
		var sampleKeys = Object.keys(options.samples);
		var key = Math.floor(id * (sampleKeys.length)) + 1;
		if(typeof options.samples[sampleKeys[key]] === 'function') {
			options.samples[sampleKeys[key]]();
		} else {
			console.log(key);
			console.log(sampleKeys);
			console.log(options.samples);
		}
		
		window._gaq.push(["_setCustomVar", options.slot, options.name, sampleKeys[key], 1]);
	}
};