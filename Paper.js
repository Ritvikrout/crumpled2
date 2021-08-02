class Paper  {
    constructor () {
        var options = {
            'restitution' : 0.5
        }
    this.body = Bodies.circle(0, 0, 10, options)
    World.add(world, this.body);
    }

    display() {
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
        circle(0, 0, 25)
    }
}