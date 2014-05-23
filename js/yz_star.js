/*
* @intro: star in my mind
* @since 2014.5.18
* @by aresy.z
*/


window.onload = function () {
	var star = [];
	var can = document.getElementById('yz_canvas');
	can.width = window.innerWidth;
	can.height = window.innerHeight;
	var con = can.getContext('2d');
	var x,y,x_s,y_s,x_f=1,y_f=1,stars = [],line_width=0.1,star_num=30;

	for (var i = 0; i < star_num; i ++) {
		x = (window.innerWidth-5)*Math.random(),
		y = (window.innerHeight-5)*Math.random(),
		x_s = Math.random()*1/2-0.2,
		y_s = Math.random()*1/2-0.2;
		option = {
			x:x,
			y:y,
			x_s:x_s,
			y_s:y_s,
			x_f:x_f,
			y_f:y_f
		}
		stars.push(option);
	}

	function draw_circle (j) {
		con.beginPath();
		con.fillStyle = '#fff';
		con.arc(stars[j].x,stars[j].y,2.5,0,2 * Math.PI);
		con.closePath();
		con.fill();
	}

	function boundary_check (j) {
		if (stars[j].x > window.innerWidth - 2 || stars[j].x < 2) {
			stars[j].x_f *= -1;
		}

		if (stars[j].y > window.innerHeight - 2 || stars[j].y < 2) {
			stars[j].y_f *= -1;
		}
	}

	function draw_line () {
		con.lineWidth = line_width;
  		con.strokeStyle = '#fff';

  		for (var k = 0; k < star_num; k ++) {		
  			for (var n = 0; n < star_num; n ++) {
  				con.beginPath();
  				con.moveTo(stars[k].x,stars[k].y);
  				con.lineTo(stars[n].x,stars[n].y);
  				con.stroke();
  				con.closePath();
  			}
  		}
	}

	function star_control (j) {
		if (j != 0) {
			stars[j].x += stars[j].x_s * stars[j].x_f;
			stars[j].y += stars[j].y_s * stars[j].y_f;
		}
		window.onkeydown = function () {
			console.log(event.keyCode);
			switch (event.keyCode) {
				case 37 :
					if (stars[0].x <= 0) {
						return false;
					} else {
						stars[0].x -= 10;
					}
					break;
				case 38 :
					if (stars[0].y <= 0) {
						return false;
					} else {
						stars[0].y -= 10;
					}
					break;
				case 39 :
					if (stars[0].x >= can.width) {
						return false;
					} else {
						stars[0].x += 10;
					}
					break;
				case 40 :
					if (stars[0].y >= can.height) {
						return false;
					} else {
						stars[0].y += 10;
					}
					break;
				default :
					return false;
			}
		}
	}

	function draw () {
		can.width = window.innerWidth;
		can.height = window.innerHeight;
		con.clearRect(0,0,can.width,can.height);

		for (var j = 0; j < star_num; j ++) {
			
			draw_circle(j);
			
			boundary_check(j);
			
			star_control(j);
		}

		draw_line();
	}

	function drawLoop () {
		setTimeout(drawLoop,50);
		draw();
	}

	drawLoop();
}