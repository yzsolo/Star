/*
* @intro: Be Quiet
* @time: 2014.5.18
* @by aresy.z
*/


window.onload = function () {
	var can = document.getElementById('yz_canvas');
	can.width = window.innerWidth;
	can.height = window.innerHeight;
	var con = can.getContext('2d');

	for (var i = 0;i<7;i++) {
		draw(con);
	}

	var x_f = 1,
		y_f = 1,
		x = 100,
		y = 100,
		x_s = Math.random()*1/2,
		y_s = Math.random()*1/2;
	function move() {
		can.width = window.innerWidth;
		can.height = window.innerHeight;

		con.clearRect(0,0,can.width,can.height);
		if(x>window.innerWidth-5 || x<5) {
			x_f *= -1;
		}
		if(y>window.innerHeight-5 || y<5) {
			y_f *= -1;
		}
		x += x_s*x_f;
		y += y_s*y_f;

		
		con.beginPath();
		con.fillStyle = '#fff';
		con.strokeStyle = '#fff';
		con.lineWidth = 4;
		con.arc(x,y,2,0,2*Math.PI);
		con.stroke();

			}
	setInterval(move,50);

	function draw (con) {
		con.beginPath();
		x = (window.innerWidth-5)*Math.random();
		y = (window.innerHeight-5)*Math.random();
		con.fillStyle = '#fff';
		con.strokeStyle = '#fff';
		con.lineWidth = 4;
		con.arc(x,y,2,0,2*Math.PI);
		con.stroke();
	}
}