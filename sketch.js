var rosy=156

function setup() {
			createCanvas(500,500); //size of canvas(background) is 500px by 500px
}

function draw()  {
	background(227,105,214); // RGB colored background, violet-pink 
	stroke(242,187,133); // RGB colored outline for shapes and font, desaturated orange
	strokeWeight(10); // the thickness of the outline in px
	fill(rosy,199,244,150); // variable color to become more red as time goes by with 50% transparency
	rosy=rosy+1 // variable
	ellipse(width/2,height/2, 300,300); // position of circle is center of canvas, 300px diameter
	textSize(60); // text is 60px large
	textFont("Monaco"); // text's font is of Monaco
	textStyle(BOLD); // text is in bold
	textAlign(CENTER); // the text is centered on it's designated position
	text("Roses bloom",mouseX,mouseY) // Roses bloom is what the text will say. The text's position is whereever the user's mouse is
}