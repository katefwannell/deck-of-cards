$(document).ready(function() {
	$("#cards form").submit(function(event) {

		var suits = ["clubs","diamonds","hearts","spades"];
		suits.forEach(function(suit) {

				var numbers = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
				numbers.forEach(function(number) {

					$("." + suit).append($("<li>").text(number + " of " + suit));
					alert("suit is " + suit);
					alert("number is " + number);

				});

			});

		event.preventDefault();

	});

});
