$(document).ready(function() {

	var timeLeft = true;
	var started = false;
	var result = 'unknown';
	var score = 0;

  var clock = $('.your-clock').FlipClock(20, {
		clockFace: 'MinuteCounter',
		countdown: true,
		autoStart: false,
		callbacks: {
    	stop: function() {
    		setTimeout(function(){
    			$('.message').html('The clock has stopped!');
    		}, 750);
   
    		timeLeft = false;
    		console.log(result);
    		if (result == 'winner') {
    			$('.result').html('You win! Score: ' + score);
    			$('.result').effect('highlight');
    		}
    	}
    }
	});

	$('.start').click(function(){
		clock.start();
		started = true;
	});

	$(document).keypress(function(e){
		if (!timeLeft) {
			alert('times up!');
		}

		if (!started) {
			alert('start the game first');
		}

		if ($(".char").not('.done').length == 0) {
			result = 'winner';
			score = clock.getTime().time + 1;
			console.log(score);
			clock.stop();
		}
	});

});