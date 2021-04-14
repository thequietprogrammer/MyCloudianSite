function canvas2() {
    // Drawing in canvas
    var canvas = document.getElementById("movingEye");
    var ctx = canvas.getContext("2d");

    document.addEventListener("mousemove", function(e) {
        eye.update(e.clientX - 50, e.clientY - 50);
    });

    var eye = {
        x: 50,
        y: 50,
        rad: 20,
        xCon: 50,
        yCon: 50,

        update: function(x, y) {
            let canvasRect = canvas.getBoundingClientRect();
            let sinDir = Math.asin((y - canvasRect.y)/(((canvasRect.x - x)**2 + (canvasRect.y - y)**2)**0.5));
            let cosDir = Math.acos((x - canvasRect.x)/(((canvasRect.x - x)**2 + (canvasRect.y - y)**2)**0.5));
            this.xCon = 50 + 15*Math.cos(cosDir);
            this.yCon = 50 + 5*Math.sin(sinDir);
        },

        adjust: function() {
            this.x += 0.2*(this.xCon - this.x);
            this.y += 0.2*(this.yCon - this.y);
        },

        draw: function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.rad, 0, 2*Math.PI);
            ctx.fillStyle = "#fff";
            ctx.fill();
        }
    };
    
    function draw() {
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, 100, 100);
        ctx.beginPath();
        ctx.arc(50, 40, 45, Math.PI, 0, true);
        ctx.arc(80, 25, 15, 0, Math.PI/2);
        ctx.closePath()
        ctx.fillStyle = "#000";
        ctx.fill();

        // Desenhando o meio do olho.
        eye.adjust();
        eye.draw();

        window.requestAnimationFrame(draw);
    }

    draw()
}

canvas2()