

var times = [10, 2];
var indexColors = [ "#ccffcc","#ffffff", "#ffcccc"];
var currentseconds = 0;
var index = 1;

function padWith0 (number) {
	if(number < 10){
		return "0"+number;
	}
	return number;
}

function printTime () {
	var minutes = Math.floor(currentseconds / 60);
	var seconds = padWith0(currentseconds % 60);
	$('#timer').text(minutes + ":" + seconds);
}


$("body").click(function () {
	document.getElementById('sound').play();
});

function countDown () {
	currentseconds--;
	printTime();
	if(currentseconds < 0){
		document.getElementById('sound').play();
		index = (index +1) % times.length;
		currentseconds = times[index]*60;
		$("body").css("background-color", indexColors[index]);
		printTime();
	}
}

setInterval(countDown, 1000);
