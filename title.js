var i = 0;
var titleText = ['g','go','goz','gozd','gozde','gozd','goz','go',];

if (document.addEventListener) {
	document.addEventListener("DOMContentLoaded", function() {
		loaded();
	});
} else if (document.attachEvent) {
	document.attachEvent("onreadystatechange", function() {
		loaded();
	});
}

function loaded() {
	setInterval(loop, 300);
}

function loop() {
	document.getElementsByTagName("title")[0].innerHTML = titleText[i++ % titleText.length];
}
