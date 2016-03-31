$(document).ready(function() {

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
						if (formValTwo == "full-orchestra") {
							$("p." + formValTwo, "div." +formValTwo, "div#amount").fadeIn(1000);
						}else if (formValOne == "dance") {
							$("p." + formValOne, "div#amount").fadeIn(1000);
						}
					});
				});
			});

		} else if (formValOne ==  "theater") {
			var formId = "theater-incidental";
			$(this).fadeOut(1000, function() {
				$("form#" + formId).fadeIn(1000);
			});

			$("form#" + formId).change(function() {
				var formValTwo = $("select.company-size").val();

				$("div#company-size").fadeOut(1000, function() {
					$("h2", "div#amount").fadeIn(1000);
					$("p." +formValTwo, "div#amount").fadeIn(1000);
					$("p." + formValOne, "div#amount").fadeIn(1000);
				});
			});

		} else if (formValOne ==  "musical-theater") {
			var formId = "musical-theater";
			$(this).fadeOut(1000, function() {
				$("form#" + formId).fadeIn(1000);
			});

		} else if (formValOne ==  "opera") {
			var formId = "opera";
			$(this).fadeOut(1000, function() {
				$("form#" + formId).fadeIn(1000);
			});

			$("form#" + formId).change(function() {
				var formValTwo = $("select.opera-length").val();
				
				$("div#opera-length").fadeOut(1000, function() {
					$("div#opera-company-size").fadeIn(1000);
				});

				$("form#" + formId).change(function() {
					var formValThree = $("select.opera-company-size").val();
					$("div#opera-company-size").fadeOut(1000, function() {
						$("h2", "div#amount").fadeIn(1000);
						$("p." + formValThree, "div." +formValTwo, "div#amount").fadeIn(1000);
						$("p." + formValOne, "div#amount").fadeIn(1000);
					});
				});
			});
		} else if (formValOne ==  "film") {
			var formId = "film";
			$(this).fadeOut(1000, function() {
				$("form#" + formId).fadeIn(1000);
			});

			$("form#" + formId).change(function() {
				var formValTwo = $("select.production-size").val();
				$("div#production-size").fadeOut(1000, function() {
					$("h2", "div#amount").fadeIn(1000);
					$("p." +formValTwo, "div#amount").fadeIn(1000);
					$("p." + formValOne).fadeIn(1000);
				});
			});

		} else if (formValOne ==  "television") {
			var formId = "television";
			$(this).fadeOut(1000, function() {
				$("form#" + formId).fadeIn(1000);
			});

			$("form#" + formId).change(function() {
				var formValTwo = $("select.episode-length").val();
				$("div#episode-length").fadeOut(1000, function() {
					$("h2", "div#amount").fadeIn(1000);
					$("p." +formValTwo, "div#amount").fadeIn(1000);
					$("p." + formValOne).fadeIn(1000);
				});
			});

		} else if (formValOne ==  "commercials") {
			var formId = "commercials";
			$(this).fadeOut(1000, function() {
				$("form#" + formId).fadeIn(1000);
			});

			$("form#" + formId).change(function() {
				var formValTwo = $("select.commercial-type").val();
				$("div#commercial-type").fadeOut(1000, function() {
					$("h2", "div#amount").fadeIn(1000);
					$("p." +formValTwo, "div#amount").fadeIn(1000);
					$("p." + formValOne).fadeIn(1000);
				});
			});

		} else if (formValOne ==  "libraries") {
			var formId = "libraries";
			$(this).fadeOut(1000, function() {
				$("form#" + formId).fadeIn(1000);
			});

			$("form#" + formId).change(function() {
				var formValTwo = $("select.library-type").val();
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

