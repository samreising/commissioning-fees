$(document).ready(function() {

	//Create AJAX function
	function correspondingForm(prevId,formId){
		$("form#" + formId).load("includes/" + formId + ".php")
		$(prevId).fadeOut(1000, function() {
			$("form#" + formId).fadeIn(1000);
		});
	}

	// Click "Get Started" to be taken to genre form.
	$("#start").click(function() {
		$(this).fadeOut(1000);
		$(".intro").fadeOut(1000);
		$("h1").slideUp(1000);
		formId = $("button").val();
		console.log(formId);
		//Complete AJAX request
		correspondingForm(this, formId);
	});

	// If the genre form changes, get value.
	$("form#genre").change(function() {
		var formValOne = $("select").val();
		console.log("formValOne: " + formValOne);

		// If the genre is concert music or jazz, the corresponding php file is posted.
		if (formValOne ==  "concert" || formValOne ==  "jazz" || formValOne ==  "dance") {
			console.log("concert-jazz-dance: " + formValOne);
			var formId = "concert-jazz-dance";
			//Complete AJAX request
			correspondingForm(this,formId);

			//If the concert-jazz form changes, select value.
			$("form#" + formId).change(function() {
				var formValTwo = $("select.instrumentation").val();
				console.log("formValTwo: " + formValTwo);
				
				//Hide #instrumentation div and show #duration div of concert-jazz form.
				$("div#instrumentation").fadeOut(1000, function() {
					$("div#duration").fadeIn(1000);
				});

				//If the concert-jazz form changes, select value.
				$("form#" + formId).change(function() {
					var formValThree = $("select.duration").val();
					console.log("formValThree: " + formValThree);
					
					//Hide #duration div of concert-jazz form and show corresponding commissioning amount.
					$("div#duration").fadeOut(1000, function() {
						$("h2", "div#amount").fadeIn(1000);
						$("p." + formValThree, "div." +formValTwo, "div#amount").fadeIn(1000);
						$("p." + formValOne, "div#amount").fadeIn(1000);
						//Fade in if full-orchestra is selected.
						if (formValTwo == "full-orchestra") {
							$("p." + formValTwo, "div." +formValTwo, "div#amount").fadeIn(1000);
						//Fade in if dance is selected.
						}else if (formValOne == "dance") {
							$("p." + formValOne, "div#amount").fadeIn(1000);
						}
					});
				});
			});

		// If the genre is theater or incidental music, the corresponding php file is posted.
		}else if (formValOne ==  "theater") {
			console.log("theater-incidental: " + formValOne);
			var formId = "theater-incidental";
			//Complete AJAX request
			correspondingForm(this,formId);

			//If the theater-incidental form changes, select value.
			$("form#" + formId).change(function() {
				var formValTwo = $("select.company-size").val();
				console.log(formValTwo);
				
				
				//Hide #company-size div of theater-incidental form and show corresponding commissioning amount.
				$("div#company-size").fadeOut(1000, function() {
					$("h2", "div#amount").fadeIn(1000);
					$("p." +formValTwo, "div#amount").fadeIn(1000);
					$("p." + formValOne, "div#amount").fadeIn(1000);
				});
			});

		// If the genre is musical theater, the corresponding php file is posted.
		}else if (formValOne ==  "musical-theater") {
			console.log("musical-theater: " + formValOne);
			var formId = "musical-theater";
			//Complete AJAX request
			correspondingForm(this,formId);

		// If the genre is opera, the corresponding php file is posted.
		}else if (formValOne ==  "opera") {
			console.log("opera: " + formValOne);
			var formId = "opera";
			var xhttp = new XMLHttpRequest();
			//Complete AJAX request
			correspondingForm(this,formId);

			//If the opera form changes, select value.
			$("form#" + formId).change(function() {
				var formValTwo = $("select.opera-length").val();
				console.log(formValTwo);
				
				//Hide #opera-length div and show #company-size div of opera form.
				$("div#opera-length").fadeOut(1000, function() {
					$("div#company-size").fadeIn(1000);
				});

				//If the opera form changes, select value.
				$("form#" + formId).change(function() {
					var formValThree = $("select.company-size").val();
					console.log(formValThree);
					
					//Hide #company-size div of opera form and show corresponding commissioning amount.
					$("div#company-size").fadeOut(1000, function() {
						$("h2", "div#amount").fadeIn(1000);
						$("p." + formValThree, "div." +formValTwo, "div#amount").fadeIn(1000);
						$("p." + formValOne, "div#amount").fadeIn(1000);
					});
				});
			});
		// If the genre is film, the corresponding php file is posted.
		}else if (formValOne ==  "film") {
			console.log("film: " + formValOne);
			var formId = "film";
			//Complete AJAX request
			correspondingForm(this,formId);

			//If the film form changes, select value.
			$("form#" + formId).change(function() {
				var formValTwo = $("select.production-size").val();
				console.log(formValTwo);
				
				
				//Hide #production-size div of film form and show corresponding commissioning amount.
				$("div#production-size").fadeOut(1000, function() {
					$("h2", "div#amount").fadeIn(1000);
					$("p." +formValTwo, "div#amount").fadeIn(1000);
					$("p." + formValOne).fadeIn(1000);
				});
			});

		// If the genre is television, the corresponding php file is posted.
		}else if (formValOne ==  "television") {
			console.log("television: " + formValOne);
			var formId = "television";
			var xhttp = new XMLHttpRequest();
			//Complete AJAX request
			correspondingForm(this,formId);

			//If the television form changes, select value.
			$("form#" + formId).change(function() {
				var formValTwo = $("select.episode-length").val();
				console.log(formValTwo);
				
				
				//Hide #episode-length div of film form and show corresponding commissioning amount.
				$("div#episode-length").fadeOut(1000, function() {
					$("h2", "div#amount").fadeIn(1000);
					$("p." +formValTwo, "div#amount").fadeIn(1000);
					$("p." + formValOne).fadeIn(1000);
				});
			});

		// If the genre is commercials, the corresponding php file is posted.
		}else if (formValOne ==  "commercials") {
			console.log("commercials: " + formValOne);
			var formId = "commercials";
			var xhttp = new XMLHttpRequest();
			//Complete AJAX request
			correspondingForm(this,formId);

			//If the commercials form changes, select value.
			$("form#" + formId).change(function() {
				var formValTwo = $("select.commercial-type").val();
				console.log(formValTwo);
				
				
				//Hide #commercial-type div of commercials form and show corresponding commissioning amount.
				$("div#commercial-type").fadeOut(1000, function() {
					$("h2", "div#amount").fadeIn(1000);
					$("p." +formValTwo, "div#amount").fadeIn(1000);
					$("p." + formValOne).fadeIn(1000);
				});
			});

		// If the genre is libraries, the corresponding php file is posted.
		}else if (formValOne ==  "libraries") {
			console.log("libraries: " + formValOne);
			var formId = "libraries";
			//Complete AJAX request
			correspondingForm(this,formId);

			//If the libraries form changes, select value.
			$("form#" + formId).change(function() {
				var formValTwo = $("select.library-type").val();
				console.log(formValTwo);
				
				
				//Hide #library-type div of commercials form and show corresponding commissioning amount.
				$("div#library-type").fadeOut(1000, function() {
					$("h2", "div#amount").fadeIn(1000);
					$("p." +formValTwo, "div#amount").fadeIn(1000);
					$("p." + formValOne).fadeIn(1000);
				});
			});

		// If the genre is videogames, the corresponding php file is posted.
		}else if (formValOne ==  "videogames") {
			console.log("videogames: " + formValOne);
			var formId = "videogames";
			var xhttp = new XMLHttpRequest();
			//Complete AJAX request
			correspondingForm(this,formId);

		}
	});
});

