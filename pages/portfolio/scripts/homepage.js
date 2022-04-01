
var enabled = false;

var menuContent = '\
<nav>\
	<ul>\
		<li><a href="#about">About</a></li>\
		<li><a href="#skills">Skills</a></li>\
		<li><a href="#experiences">Experiences</a></li>\
		<li><a href="#projects">Projects</a></li>\
	</ul>\
</nav>\
';


function toggleOptionsMenu() {
	let optionsMenu = document.getElementById("menu-options");


	if (!enabled) {
		optionsMenu.innerHTML = menuContent;
		enabled = true;
	}
	else {
		optionsMenu.innerHTML = '';
		enabled = false;
	}
}
