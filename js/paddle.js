/**
 * Created by djenken on 17/08/2016.
 */


function Paddle(domElement){

    this.element = domElement;
    //Paddle Has:
    //Position

    //Move Speed
    this.moveSpeed  = 2.0;
    this.moveUp     = false;
    this.moveDown   = false;
    this.moveLeft   = false;
    this.moveRight  = false;
    //Size in units
    this.size       = 2.0;

}

Paddle.prototype.update = function(){
    //If the movement flags are set, do the movement
    if(this.moveUp)      { this.doMoveUp();      }
    if(this.moveDown)    { this.doMoveDown();    }
    if(this.moveLeft)    { this.doMoveLeft();    }
    if(this.moveRight)   { this.doMoveRight();   }
};

//Paddle can:
//Move Up
Paddle.prototype.doMoveUp       = function(){
    //If not at max height
        //Move up
        var pos = this.element.position();

        pos.top -= this.moveSpeed;

        this.element.css({ left : pos.left, top : pos.top });
};
//Move Down
Paddle.prototype.doMoveDown     = function(){
    //if not at min height
        //Move down
        var pos = this.element.position();

        pos.top += this.moveSpeed;

        this.element.css({ left : pos.left, top : pos.top });
};
Paddle.prototype.doMoveRight    = function(){

};
Paddle.prototype.doMoveLeft     = function(){

};
//Change Size
Paddle.prototype.grow           = function(amount){

};

Paddle.prototype.shrink         = function(amount){
    //Size -= shrink amount
};