/**
	Tuyet-Ngoc Le
	CSC 2463
	Assignment 1 Example 4
	Due: 01/24/2017
**/

function setup(){
	createCanvas(200, 200);
}

function draw(){
	background(0, 0, 100);
	strokeWeight(3);
	stroke(255, 255, 255);
	fill(0, 120, 0);
	ellipse(100, 100, 100, 100);

	fill(255, 0, 0);
	beginShape();
	vertex(100, 48);
	vertex(85, 80);
	vertex(50, 80);
	vertex(80, 105);
	vertex(65, 137);
	vertex(100, 120);
	vertex(130, 140);
	vertex(120, 105);
	vertex(150, 80);
	vertex(115, 80);
	vertex(100, 48);
	endShape(CLOSE);
}