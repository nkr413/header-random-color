let colors = ["red", "yellow", "blue", "springgreen", "purple", "orange", "green", "lime", "teal", "28c76f", "fuchsia", "crimson", "maroon"];
let pastColor;
document.getElementById("header-name").addEventListener('mouseover', function(e) {
	let randomColor = Math.floor(Math.random() * colors.length);
	if (pastColor == randomColor) randomColor = Math.floor(Math.random() * colors.length);
	pastColor = randomColor;
	document.getElementById("header-block").style.backgroundColor = colors[randomColor];
});



