
var UserInputStatus = function(fieldName,fieldValue){

	if (fieldValue === "") {
		alert ("Enter a number to count " + fieldName);
	} else if (isNaN(fieldValue))  {
		alert ("Enter a valid number to count " + fieldName);
	}
}

$(document).ready(function() {

	$("#loopUser form").submit(function(event) {
		event.preventDefault();

		UserInputStatus("from",$("#countFrom").val());
		UserInputStatus("to",$("#countTo").val());
	  UserInputStatus("by",$("#countBy").val());

    var countFrom = parseInt($("#countFrom").val());
		var countTo = parseInt($("#countTo").val());
		var countBy = parseInt($("#countBy").val());

		for (var index = countFrom; index <= countTo; index += countBy ) {
			$(".resultUser").append($("<li>").text(index));
		}
	});

	$("#loop30 form").submit(function(event) {
		event.preventDefault();
		for (var index = 5; index <= 30; index += 5 ) {
			$(".result30").append($("<li>").text(index));
		}
	});

	$("#loop50 form").submit(function(event) {
		event.preventDefault();
		for (var index = 7; index <= 50; index += 7 ) {
			$(".result50").append($("<li>").text(index));
		}
	});
});
