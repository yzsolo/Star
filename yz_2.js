window.onload = function () {
	var can = document.getElementById('yz_canvas');
	can.width = window.innerWidth;
	can.height = window.innerHeight;
	var con = can.getContext('2d');

	var Circle = function () {
		this.con = con;
	}
	Circle.prototype = {

		init : function() {
			var	x_f = 1,
			y_f = 1,
			line_width = 2,
			x = (window.innerWidth-5)*Math.random(),
			y = (window.innerHeight-5)*Math.random(),
			x_s = Math.random()*1,
			y_s = Math.random()*1;
			return {
				x: x,
				y: y,
				x_s: x_s,
				y_s: y_s,
				x_f: x_f,
				y_f: y_f,
				line_width: line_width
			}
		},
		draw : function () {
			var init = this.init();
			this.con.beginPath();
			this.con.fillStyle = '#fff';
			this.con.strokeStyle = '#fff';
			this.con.lineWidth = 2;
			this.con.arc(init.x,init.y,1,0,2*Math.PI);
			this.con.stroke();
			var option = {
				x: init.x,
				y: init.y,
				x_s: init.x_s,
				y_s: init.y_s,
				x_f: init.x_f,
				y_f: init.y_f,
				line_width: init.line_width
			}
			return option;
		},
		move : function () {
			var draw = this.draw();
			can.width = window.innerWidth;
			can.height = window.innerHeight;
			function m () {
				// con.clearRect(0,0,can.width,can.height);
				if(draw.x>window.innerWidth-2 || draw.x<2) {
					draw.x_f *= -1;
				}
				if(draw.y>window.innerHeight-2 || draw.y<2) {
					draw.y_f *= -1;
				}
				draw.x += draw.x_s*draw.x_f;
				draw.y += draw.y_s*draw.y_f;

				
				con.beginPath();
				con.fillStyle = '#fff';
				con.strokeStyle = '#fff';
				con.lineWidth = 2;
				con.arc(draw.x,draw.y,1,0,2*Math.PI);
				con.stroke();
			}
			setInterval(m,10);
		}

	}

	var star = [];

	for(var i=0;i<10;i++) {

			star[i] = new Circle();
			star[i].draw();
			setTimeout(star[i].move(),100);	

	}	
}