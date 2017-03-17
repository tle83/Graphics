/**
	Tuyet-Ngoc Le
	CSC 2463
	Assignment 1 Example 3
	Due: 01/24/2017
**/

function setup(){
	createCanvas(200, 100);
}

function draw(){
	background(0, 0, 0);

	fill(255, 255, 0);
	arc(50, 50, 80, 80, 10, 40, PIE);

	fill(255, 0, 0);
	rect(110, 50, 80, 40);
	arc(150, 50, 80, 80, PI, 0, CHORD);

	fill(255, 255, 255);
	ellipse(130, 50, 25, 25);

	fill(255, 255, 255);
	ellipse(170, 50, 25, 25);

	fill(0, 0, 255);
	ellipse(130, 50, 15, 15);

	fill(0, 0, 255);
	ellipse(170, 50, 15, 15);

	noStroke();
}