/**
Tuyet-Ngoc Le
	CSC 2463
	Assignment 2
	Due: 01/31/2017
**/
var c;

function setup(){
	createCanvas(720, 480);
	background(255);
	c = color(0);
}

// This function takes in four parameters
// loc is the y-coordinate location of the color box palette
function boxColor(loc, r, g, b){
	stroke(255);
	strokeWeight(1);
	fill(r, g, b);
	rect(2, loc, 20, 20);
}

// This function checks the location of the mouse
// and then assign the color value to variable c
function mousePressed(){
	if ((mouseX >= 2) && (mouseX <= 20) && 
		(mouseY >= 2) && (mouseY <= 20)) {
			c = color(255, 0, 0); //red
	}
	else if((mouseX >= 2) && (mouseX <= 20) &&
		(mouseY >= 24) && (mouseY <= 44)){
		c = color(255, 165, 0);	//orange
	}
	else if((mouseX >= 2) && (mouseX <= 20) &&
		(mouseY >= 46) && (mouseY <= 66)){
		c = color(255, 255, 0);	//yellow
	}
	else if((mouseX >= 2) && (mouseX <= 20) &&
		(mouseY >= 68) && (mouseY <= 88)){
		c = color(0, 255, 0);	//green
	}
	else if((mouseX >= 2) && (mouseX <= 20) &&
		(mouseY >= 90) && (mouseY <= 110)){
		c = color(0, 255, 255);	//light blue
	}
	else if((mouseX >= 2) && (mouseX <= 20) &&
		(mouseY >= 112) && (mouseY <= 132)){
		c = color(0, 0, 255);	//blue
	}
	else if((mouseX >= 2) && (mouseX <= 20) &&
		(mouseY >= 134) && (mouseY <= 154)){
		c = color(225, 0, 255);	//magenta
	}
	else if((mouseX >= 2) && (mouseX <= 20) &&
		(mouseY >= 156) && (mouseY <= 176)){
		c = color(102, 51, 0);	//brown
	}
	else if((mouseX >= 2) && (mouseX <= 20) &&
		(mouseY >= 178) && (mouseY <= 198)){
		c = color(255, 255, 255);	//white
	}
	else if((mouseX >= 2) && (mouseX <= 20) &&
		(mouseY >= 200) && (mouseY <= 220)){
		c = color(0, 0, 0);		//black
	}
	else if((mouseX >= 2) && (mouseX <= 20) &&
		(mouseY >= 222) && (mouseY <= 242)){
		c = color(165, 165, 165);	//gray
	}
}

function draw(){

	if(mouseIsPressed == true){
		stroke(c);
		strokeWeight(5);
		line(mouseX, mouseY, pmouseX, pmouseY);
	}

	//red
	boxColor(2, 255, 0, 0);

	//orange
	boxColor(24, 255, 165, 0);

	//yellow
	boxColor(46, 255, 255, 0);

	//green
	boxColor(68, 0, 255, 0);

	//light blue
	boxColor(90, 0, 255, 255);

	//blue
	boxColor(112, 0, 0, 255);

	//magenta
	boxColor(134, 255, 0, 255);

	//brown
	boxColor(156, 102, 51, 0);

	//white
	boxColor(178, 255, 255, 255);

	//black
	boxColor(200, 0, 0, 0);

	//gray
	boxColor(222, 165, 165, 165);
}

