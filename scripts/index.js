document.addEventListener("DOMContentLoaded", function() {
    var flappy = new Flappy();
    var gravity = 250 //px/s²;
    var height = (parseInt((Math.random() * 50) + 20)) + "vh";

    var pipetop = new Pipe(height);
    document.getElementById("pipetop").style.height = pipetop.height;

    var pipebottom = new Pipe(75 - parseInt(height) + "vh");
    document.getElementById("pipebottom").style.height = pipebottom.height;

    document.body.onclick = function() {
        flappy.fly();
    };

    var timer = window.setInterval(function() {
        if (Collide()) {
            document.getElementById("gameOver").style.display = "block";
            pipetop.speed = 0;
            pipebottom.speed = 0;
        };
        if (pipetop.posX < -15) {
            pipetop.posX = 100;
            pipebottom.posX = 100;
            pipetop.height = parseInt((Math.random() * 50) + 20);
            pipebottom.height = 75 - pipetop.height;
            document.getElementById("pipetop").style.height = pipetop.height;
            document.getElementById("pipebottom").style.height = pipebottom.height;
        }
        pipetop.move();
        document.getElementById("pipetop").style.left = pipetop.posX + "vw";
        pipebottom.move();
        document.getElementById("pipebottom").style.left = pipetop.posX + "vw";

        document.getElementById("flappy").style.top = flappy.posY + "vh";
        document.getElementById("flappy").style.transform = `rotate(${flappy.angle}deg)`;
        flappy.speed = flappy.speed + (gravity * 0.02);
        flappy.posY = flappy.posY + (flappy.speed * 0.02);
        flappy.angle = flappy.speed / 5;
    }, 20);
})
