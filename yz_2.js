window.onload = function () {
	var can = document.getElementById('yz_canvas');
	can.width = window.innerWidth;
	can.height = window.innerHeight;
	var con = can.getContext('2d');

	var Circle = function (x,y,x_s,y_s,line_width) {
		this.x = x;
		this.y = y;
		this.x_s = x_s;
		this.y_s = y_s;
		this.x_f = 1;
		this.y_f = 1;
		this.con = con;
		this.line_width = line_width;
	}
	Circle.prototype = {

		draw : function () {

			this.con.beginPath();
			this.con.fillStyle = '#fff';
			this.con.strokeStyle = '#fff';
			this.con.lineWidth = 4;
			this.con.arc(this.x,this.y,2,0,2*Math.PI);
			this.con.stroke();

		},
		move : function () {
			
		}

	}

	var star = [];

	for(var i=0;i<7;i++) {
		var x = (window.innerWidth-5)*Math.random(),
			y = (window.innerHeight-5)*Math.random(),
			x_s = Math.random()*1/2,
			y_s = Math.random()*1/2,
			line_width = 4;

			star[i] = new Circle(x,y,x_s,y_s,line_width);
			star[i].draw();
			setInterval(star[i].say,1000);	
	}
	
}