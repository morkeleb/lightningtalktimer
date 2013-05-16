

var times = [10, 7, 1];
var indexColors = ["#ffffff", "#ffcccc", "#ccffcc"];
var currentseconds = 0;
var index = 0;

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


function countDown () {
	currentseconds--;
	printTime();
	$("body").css("background-color", indexColors[index]);
	if(currentseconds === 0){
		document.getElementById('sound').play();
		index = (index +1) % times.length;
		currentseconds = times[index]*60;
		printTime();
	}
}

currentseconds = times[index]*60;
printTime();
setInterval(countDown, 1000);
