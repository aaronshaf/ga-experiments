window._gaq = window._gaq || [];

window.GAExperiments = {
	experiments: [],
	
	add: function (options) {
		if (typeof $ === 'undefined' || !window.localStorage || !options.samples) {
			return;
		}
		var id = localStorage.getItem('ga-experiments-id');
		if (!id) {
			id = Math.random();
			localStorage.setItem('ga-experiments-id', id);
		}
		var sampleKeys = Object.keys(options.samples);
		var key = Math.floor(id * (sampleKeys.length)) + 1;
		options.samples[sampleKeys[key]]();
		window._gaq.push(["_setCustomVar", options.slot, options.name, sampleKeys[key], 1]);
	}
};