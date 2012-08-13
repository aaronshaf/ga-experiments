window._gaq = window._gaq || [];

window.GAExperiments = {
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
		var key = Math.floor(id * (sampleKeys.length));
		options.samples[sampleKeys[key]]();
		
		window._gaq.push(["_setCustomVar", options.slot, options.name, sampleKeys[key], 1]);
	}
};