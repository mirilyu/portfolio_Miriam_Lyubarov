var switcher = false;
function playAudio() {
	var audio = document.getElementById("audio");
	
	if(!switcher) {
    	audio.play();
		switcher = true;
	} else {
		audio.pause();
		switcher = false;
	}
}