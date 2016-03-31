$(document).ready(function() {

	// Click "Get Started" to be taken to genre form.
	$("#start").click(function() {
		$("#intro").fadeOut(1000, function() {
			$("#genre").fadeIn(1000);
		});
	});

	$("form#genre").change(function() {
		var formValOne = $("select").val();

		if (formValOne ==  "concert" || formValOne ==  "jazz" || formValOne ==  "dance") {
			var formId = "concert-jazz-dance";
			$("#genre").fadeOut(1000, function() {
				$("#" + formId).fadeIn(1000);
			});

			$("form#" + formId).change(function() {
				var formValTwo = $("select.instrumentation").val();
				
				$("div#instrumentation").fadeOut(1000, function() {
					$("div#duration").fadeIn(1000);
				});

				$("form#" + formId).change(function() {
					var formValThree = $("select.duration").val();
					
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
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (xhttp.readyState == 4 && xhttp.status == 200) {
			      document.getElementById(formId).innerHTML = xhttp.responseText;
			    }
			};
		  	xhttp.open("POST", "includes/" + formId + ".php", true);
		  	xhttp.send();
			$(this).fadeOut(1000, function() {
				$("form#" + formId).fadeIn(1000);
			});

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
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (xhttp.readyState == 4 && xhttp.status == 200) {
			      document.getElementById(formId).innerHTML = xhttp.responseText;
			    }
			};
		  	xhttp.open("POST", "includes/" + formId + ".php", true);
		  	xhttp.send();
			$(this).fadeOut(1000, function() {
				$("form#" + formId).fadeIn(1000);
			});

		// If the genre is opera, the corresponding php file is posted.
		}else if (formValOne ==  "opera") {
			console.log("opera: " + formValOne);
			var formId = "opera";
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (xhttp.readyState == 4 && xhttp.status == 200) {
			      document.getElementById(formId).innerHTML = xhttp.responseText;
			    }
			};
		  	xhttp.open("POST", "includes/" + formId + ".php", true);
		  	xhttp.send();
			$(this).fadeOut(1000, function() {
				$("form#" + formId).fadeIn(1000);
			});

			//If the opera form changes, select value.
			$("form#" + formId).change(function() {
				var formValTwo = $("select.opera-length").val();
				console.log(formValTwo);
				
				//Hide #opera-length div and show #company-size div of opera form.
				$("div#opera-length").fadeOut(1000, function() {
					$("div#company-size").fadeIn(1000);
				});

				//If the concert-jazz form changes, select value.
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
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (xhttp.readyState == 4 && xhttp.status == 200) {
			      document.getElementById(formId).innerHTML = xhttp.responseText;
			    }
			};
		  	xhttp.open("POST", "includes/" + formId + ".php", true);
		  	xhttp.send();
			$(this).fadeOut(1000, function() {
				$("form#" + formId).fadeIn(1000);
			});

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
			xhttp.onreadystatechange = function() {
				if (xhttp.readyState == 4 && xhttp.status == 200) {
			      document.getElementById(formId).innerHTML = xhttp.responseText;
			    }
			};
		  	xhttp.open("POST", "includes/" + formId + ".php", true);
		  	xhttp.send();
			$(this).fadeOut(1000, function() {
				$("form#" + formId).fadeIn(1000);
			});

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
			xhttp.onreadystatechange = function() {
				if (xhttp.readyState == 4 && xhttp.status == 200) {
			      document.getElementById(formId).innerHTML = xhttp.responseText;
			    }
			};
		  	xhttp.open("POST", "includes/" + formId + ".php", true);
		  	xhttp.send();
			$(this).fadeOut(1000, function() {
				$("form#" + formId).fadeIn(1000);
			});

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
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (xhttp.readyState == 4 && xhttp.status == 200) {
			      document.getElementById(formId).innerHTML = xhttp.responseText;
			    }
			};
		  	xhttp.open("POST", "includes/" + formId + ".php", true);
		  	xhttp.send();
			$(this).fadeOut(1000, function() {
				$("form#" + formId).fadeIn(1000);
			});

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
			xhttp.onreadystatechange = function() {
				if (xhttp.readyState == 4 && xhttp.status == 200) {
			      document.getElementById(formId).innerHTML = xhttp.responseText;
			    }
			};
		  	xhttp.open("POST", "includes/" + formId + ".php", true);
		  	xhttp.send();
			$(this).fadeOut(1000, function() {
				$("form#" + formId).fadeIn(1000);
				$("h2", "div#amount").fadeIn(1000);
				$("p." + formValOne, "div#amount").fadeIn(1000);
				$("button." + formValOne, "div#amount").fadeIn(1000);
			});

		}
	});
});

