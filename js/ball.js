/**
 * Created by djenken on 17/08/2016.
 */
function Ball(domElement){


    //Ball is the game ball, it has things like:
    //Position
    this.position = new v2(0,0);
    //Dom Element
    this.element = domElement;
    this.velocity = new v2(1, 0);
    //Speed
    //Size
    //Pos

    //And it checks for collision with:

    //Paddles
    //Walls
    //Endzones


}

Ball.prototype.update = function(){


    //Move the ball left to test movement
    var pos = this.element.position();

    pos.left += this.velocity.x;

    this.element.css({ left : pos.left, top : pos.top });

};

Ball.prototype.checkCollision = function(other){

    //If other is wall
        //Bounce

    //If other is Paddle
        //Calculate angle based on paddle velocity
        //Bounce

    //If other is EndZone
        //Score
};