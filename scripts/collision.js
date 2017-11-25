function Collide() {
    var flappyR = flappy.getBoundingClientRect();
    var pipetopR = pipetop.getBoundingClientRect();
    var pipebottomR = pipebottom.getBoundingClientRect();

    if (flappyR.left < pipetopR.left + pipetopR.width &&
        flappyR.left + flappyR.width > pipetopR.left &&
        flappyR.top < pipetopR.top + pipetopR.height &&
        flappyR.height + flappyR.top > pipetopR.top ||

        flappyR.left < pipebottomR.left + pipebottomR.width &&
        flappyR.left + flappyR.width > pipebottomR.left &&
        flappyR.top < pipebottomR.top + pipebottomR.height &&
        flappyR.height + flappyR.top > pipebottomR.top) {
        return true;
    }
}
