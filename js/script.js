console.log("script");


function layout() {
	var styleLink = document.getElementById('pagestyle');
	console.log('innerWidth = ' + this.innerWidth);
	if(this.innerWidth < 660) {
		console.log("innerWidth < 660 to mobile");	
		styleLink.setAttribute("href", "./css/mobile.css");

	} else if(this.innerWidth < 840) {
		console.log("innerWidth > 660 < 840 to medium 640");
		styleLink.setAttribute("href", "./css/medium.css");
		
	} else {
		console.log("innerWidth >= 840 to large - 800");
		styleLink.setAttribute("href", "./css/large.css");		
	}
}

window.onresize = layout;
layout();








