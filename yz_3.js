window.onload = function () {
	var can = document.getElementById('yz_canvas');
	can.width = window.innerWidth;
	can.height = window.innerHeight;
	var con = can.getContext('2d');

	var Star = function () {
		this.con = con;
	}
	Star.prototype = {

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
		}
	}
	var star = [];

	for(var i=0;i<150;i++) {

		star[i] = new Star();
		star[i].draw();

	}	
}