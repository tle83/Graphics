/**
	Tuyet-Ngoc Le
	CSC 2463
	Assignment 1 Example 2
	Due: 01/24/2017
**/

function setup(){
	createCanvas(200, 200);
}

function draw(){
	background(255, 255, 255);
	//top center ellipse
	fill('rgba(255, 0, 0, 0.25)');
	ellipse(100, 60, 100, 100);
	//right bottom ellipse
	fill('rgba(0, 255, 0, 0.25)');
	ellipse(130, 120, 100, 100);
	//left bottom ellipse
	fill('rgba(0, 0, 255, 0.25)');
	ellipse(70, 120, 100, 100);
	noStroke();
}