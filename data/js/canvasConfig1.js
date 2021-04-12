function canvas1() {
    // Drawing in canvas.
    var canvas = document.getElementById("rollingSquare");
    var ctx = canvas.getContext("2d");
    ctx.translate(50, 50);

    var square = {
        x: 0,
        y: 0,
        size: 50,

        // To move the white square.
        tetaAngle: 0,
        spinSignal: 0,
        spinAngle: 0,
        timeCount: 0,
        ratio: 20,

        update: function() {
            this.timeCount += 1;
            let variable = 25*Math.sin(this.timeCount/this.ratio)
            this.size = 35 + Math.abs(variable)

            if (variable < 0 && this.spinSignal == 0) {
                this.spinSignal = 1;
                this.spinAngle += Math.PI/2;
            }
            if (this.spinSignal) {
                this.tetaAngle += 0.1*(this.spinAngle - this.tetaAngle);
                if (variable > 0 && this.spinAngle - this.tetaAngle < 0.001) {this.spinSignal = 0;}
            }
        },

        draw: function() {
            ctx.fillStyle = "#aaa";
            ctx.fillRect(-50, -50, 100, 100);
            ctx.save();

            ctx.rotate(this.tetaAngle);
            ctx.fillStyle = "#fff";
            ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
            ctx.restore();
        }
    };

    function draw() {
        ctx.clearRect(-50, -50, 100, 100);
        square.update();
        square.draw();
        window.requestAnimationFrame(draw);
    }

    draw()
}

canvas1()