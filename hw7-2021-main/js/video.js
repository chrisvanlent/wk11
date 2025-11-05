var video = document.querySelector("#player1")
let speed = 1;
let mute = false
let vol = 1

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slower Video")
	speed *= 0.5
	video.playbackRate = speed;
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Faster Video")
	speed *= 2
	video.playbackRate = speed;
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video")
	video.currentTime += 15;
});

document.querySelector("#mute").addEventListener("click", function() {
	if (mute == false) {
		console.log("Mute Video")
		mute = true
	}
	else if (mute == true) {
		console.log("Unmute Video")
		mute = false
	}
	console.log(mute)
	video.muted = mute
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Volume Change")
	vol = document.querySelector("#slider").value;
	vol *= 0.01
	console.log(vol)
	video.volume = vol
});