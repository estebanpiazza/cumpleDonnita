//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "31 oct 2022 00:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	