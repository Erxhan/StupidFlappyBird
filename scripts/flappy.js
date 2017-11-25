function Flappy() {
    this.posY = 50;
    this.alive = true;
    this.speed = -50; //vw/s
    this.angle = 0;
}

Flappy.prototype.fly = function() {
    this.speed = -100; //px/s
}
