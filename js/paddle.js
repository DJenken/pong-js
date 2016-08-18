/**
 * Created by Dylan Jenken on 17/08/2016.
 */


function Paddle(domElement){

    this.element = domElement;
    //Paddle Has:
    //Move Speed
    this.moveSpeed  = 5.0;
    this.initialSpeed = this.moveSpeed;
    this.moveUp     = false;
    this.moveDown   = false;
    this.moveLeft   = false;
    this.moveRight  = false;
    //Size in units
    this.size           = new v2(domElement.width(), domElement.height());
    this.initialSize    = new v2(this.size.x, this.size.y);

}

Paddle.prototype.newGame = function(){
    this.moveSpeed = this.initialSpeed;
    this.size = this.initialSize;
    this.element.height(this.size.y);
};

Paddle.prototype.update = function(){
    //If the movement flags are set, do the movement
    if(this.moveUp)      { this.doMoveUp();      }
    if(this.moveDown)    { this.doMoveDown();    }

    if(this.moveLeft)    { /*this.doMoveLeft();*/}
    if(this.moveRight)   {/*this.doMoveRight();*/}
};

//Paddle can:
//Move Up
Paddle.prototype.doMoveUp       = function(){
    //If not at max height
    if(this.element.position().top > 0) {
        //Move up
        var pos = this.element.position();

        pos.top -= this.moveSpeed;

        this.element.css({left: pos.left, top: pos.top});
    }
};
//Move Down
Paddle.prototype.doMoveDown     = function(){
    //if not at min height
    if(this.element.position().top + this.size.y < this.element.parent().height()) {
        //Move down
        var pos = this.element.position();

        pos.top += this.moveSpeed;

        this.element.css({left: pos.left, top: pos.top});
    }
};

//Grow and shrink
Paddle.prototype.grow           = function(amount){
    this.size.y += amount;
    this.element.height(this.size.y);
};

Paddle.prototype.shrink         = function(amount){
    this.size.y -= amount;
    this.element.height(this.size.y);
};