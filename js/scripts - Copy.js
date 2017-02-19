
$(document).ready(function() {

	$("#blanks form").submit(function(event) {

		var blanks = ["item1", "item2", "item3","item4", "item5", "item6"];

		blanks.forEach(function(blank) {
			var userInput = $("#" + blank).val();
			$("." + blank).text(userInput).val();
		});




		var blankVals = [$("#item1").val(),$("#item2").val(),$("#item3").val(), $("#item4").val(),$("#item5").val(),$("#item6").val()];

		blankVals.sort();

		var blankValsCap = blankVals.map(function(blankValsCap) {
  		return blankValsCap.toUpperCase();
		});

		var i = 0;

		blankValsCap.forEach(function(blankValCap) {
			if (blankValCap != "") {
				i = parseInt(i) + 1;
				$(".itemVal" + i).text(blankValCap).val();
			}
		});

		$("#blanks").hide();
		$("#list").show();

		event.preventDefault();
	});

});
