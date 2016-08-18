/**
 * Created by djenken on 17/08/2016.
 */
function Ball(domElement){

    //Dom Element
    this.element    = domElement;
    //Ball is the game ball, it has things like:
    //Position
    this.pos   = new v2(this.element.position().left, this.element.position().top);
    this.velocity   = new v2(1, 0);
    //Size
    this.size       = new v2(domElement.width(), domElement.height());

    //And it checks for collision with:

    //Paddles
    //Walls
    //Endzones


}

Ball.prototype.update = function(){


    //Move the ball left to test movement
    var pos = this.element.position();

    pos.left += this.velocity.x;
    pos.top  += this.velocity.y;

    this.element.css({ left : pos.left, top : pos.top });

    this.pos = new v2(pos.left, pos.top);
};

Ball.prototype.checkCollision = function(collidables){

    for(var i = 0; i < collidables.length; i++)
    {
        //if ball element overlaps another collidable element
            //ask what other element is
            //react accordingly

        var col = {};
        col.size = new v2(collidables[i].width(), collidables[i].height());
        col.pos  = new v2(collidables[i].position().left, collidables[i].position().top);
        if( (this.pos.y + this.size.y) > col.pos.y &&
            this.pos.y < (col.pos.y + col.size.y) &&
            (this.pos.x + this.size.x) > col.pos.x &&
            this.pos.x < (col.pos.x + col.size.x))
        {
            console.log("collision!");
            //What element is it?
                //Wall
                //Paddle
                //EndZone
        }

    }

};