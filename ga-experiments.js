GAExperiments = {
	this.experiments = [];
	
	this.add = function(options) {
		if(typeof $ === 'undefined'
				|| typeof _gaq === 'undefined'
				|| !window.localStorage
				|| !options.samples) return;
		var id = localStorage.getItem('ga-experiments-id');
		if(!id) {
			id = Math.random();
			localStorage.setItem('ga-exeriments-id',id);
		}
		var sampleKeys = Object.keys(options.samples);
		options.samples[sampleKeys[Math.floor(id * (sampleKeys.length)) + 1]]();
	};
};

//_gaq.push(["_setCustomVar", options.slot, options.name, value, 1]);