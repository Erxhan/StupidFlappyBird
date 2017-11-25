function Pipe(h) {
    this.posX = 100;
    this.height = h;
    this.speed = -30;
}

Pipe.prototype.move = function() {
    this.posX = this.posX + (this.speed * 0.02);
}
