function canvas2() {
    // Drawing in canvas
    var canvas = document.getElementById("movingEye");
    var ctx = canvas.getContext("2d");

    function draw() {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, 100, 100);
        ctx.beginPath();
        ctx.arc(50, 50, 50, 0, 2*Math.PI);
        ctx.stroke();
        window.requestAnimationFrame(draw);
    }

    draw()
}

canvas2()