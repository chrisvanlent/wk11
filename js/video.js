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
	v = document.querySelector("#volume")
	v.innerHTML = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slower Video")
	console.log("Old speed is " + speed)
	speed *= 0.9
	video.playbackRate = speed;
	console.log("New speed is " + speed)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Faster Video")
	console.log("Old speed is " + speed)
	speed /= 0.9
	video.playbackRate = speed;
	console.log("New speed is " + speed)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip video")
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0
	}
	else {
		video.currentTime += 10;
	}
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
	v = document.querySelector("#volume")
	v.innerHTML = video.volume * 100 + "%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("New School");
	video.classList.remove("oldSchool");
});