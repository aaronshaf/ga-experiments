ga-experiments
==============

JavaScript A/B testing with custom variables in Google Analytics 

```javascript
GAExperiments.add({
  name: "Left column font size",
  slot: 1,
	samples: {,
		'.9em': function(){
			$('#sidebar-left .content').css({
				'font-size': '.9em'
			});
		},
		'1em': function(){
			//no change
		},
		'1.1em': function(){
			$('#sidebar-left .content').css({
				'font-size': '1.1em'
			});
		}
	}
});
```