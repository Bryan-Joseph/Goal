canvas = new fabric.Canvas('myCanvas');
// Create canvas variable

//Set initial positions for ball and hole images.

var ball = {
	x: 10,
	y: 10,
	size: 50
}

var hole = {
	x: 800,
	y: 300,
	size: 130
}

holeObj = "";
ballObj = "";

//block_image_width = 5;
//block_image_height = 5;

function load_img() {
	// write code to Upload golf image on the canvas

	fabric.Image.fromURL("golf-h.png", function (Img) {
		holeObj = Img;
		holeObj.scaleToWidth(hole.size);
		holeObj.scaleToHeight(hole.size);
		holeObj.set({
			top: hole.y,
			left: hole.x
		});

		canvas.add(holeObj);
	});

	new_image();
}

function new_image() {
	// write code to Upload ball image on canvas

	fabric.Image.fromURL("ball.png", function (Img) {
		console.log("n");
		ballObj = Img;
		ballObj.scaleToWidth(ball.size);
		ballObj.scaleToHeight(ball.size);
		ballObj.set({
			top: ball.y,
			left: ball.x
		});

		canvas.add(ballObj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.key;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if (ball.x <= hole.x + hole.size && hole.x <= ball.x + ball.size 
		&& ball.y <= hole.y + hole.size && hole.y <= ball.y + ball.size) {

		canvas.remove(ballObj);
		document.getElementById("hd3").innerHTML = "You have hit the Goal !!!!";
		document.getElementById("myCanvas").style.borderColor = "red";

	}
	else {
		if (keyPressed == 'ArrowUp'&& ball.y - ball.size> 0 ) {
			moveChar(0, -1);
			console.log("up");
		}
		if (keyPressed == 'ArrowDown' && ball.y < 500 - ball.size) {
			moveChar(0, 1);
			console.log("down");
		}
		if (keyPressed == 'ArrowLeft' && ball.x - ball.size> 0) {
			moveChar(-1, 0);
			console.log("left");
		}
		if (keyPressed == 'ArrowRight' && ball.x < 1100 - ball.size) {
			moveChar(1, 0);
			console.log("right");
		}
	}

	function moveChar(x, y) {
		ball.x += x * ball.size;
		ball.y += y * ball.size;

		new_image();
		canvas.remove(ballObj);
	}

	function up() {
		// Write a code to move ball upward.
	}

	function down() {
		// Write a code to move ball downward.
	}

	function left() {
		if (ball_x > 5) {
			// Write a code to move ball left side.
		}
	}

	function right() {
		if (ball_x <= 1050) {
			// Write a code to move ball right side.
		}
	}

}

