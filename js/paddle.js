/**
 * Created by Dylan Jenken on 17/08/2016.
 */

var Paddle = (function(){

    function PaddleClass(domElement){

        //my dom element
        this.element = domElement;
        //Paddle Has:
        this.moveSpeed  = 3.5;
        this.size           = new v2(domElement.width(), domElement.height());
        //Initial values, for updating settings on new game
        this.initialSpeed = this.moveSpeed;
        this.initialSize    = new v2(domElement.width(), domElement.height());

        //Input booleans
        this.moveUp     = false;
        this.moveDown   = false;
        this.moveLeft   = false;
        this.moveRight  = false;
    }

    PaddleClass.prototype.newGame = function(){
        this.moveSpeed = this.initialSpeed;
        this.size = new v2(this.initialSize.x, this.initialSize.y);
        this.element.height(this.size.y);
    };

    PaddleClass.prototype.update = function(dt){
        //If the movement booleans are true, do the movement
        if(this.moveUp)      { this.doMoveUp(dt);      }
        if(this.moveDown)    { this.doMoveDown(dt);    }
        //If left and right were to be used, they would happen here
        if(this.moveLeft)    { /*this.doMoveLeft();*/}
        if(this.moveRight)   {/*this.doMoveRight();*/}
    };

    //Paddle can:
    //Move Up
    PaddleClass.prototype.doMoveUp       = function(dt){
        //If not at max height
        if(this.element.position().top > 0) {
            //Move up
            var pos = this.element.position();

            pos.top -= this.moveSpeed * dt;

            this.element.css({left: pos.left, top: pos.top});
        }
    };
    //Move Down
    PaddleClass.prototype.doMoveDown     = function(dt){
        //if not at min height
        if(this.element.position().top + this.size.y < this.element.parent().height()) {
            //Move down
            var pos = this.element.position();

            pos.top += this.moveSpeed * dt;

            this.element.css({left: pos.left, top: pos.top});
        }
    };

    //Grow and shrink
    PaddleClass.prototype.grow           = function(amount){
        this.size.y += amount;
        this.element.height(this.size.y);
    };

    PaddleClass.prototype.shrink         = function(amount){
        this.size.y -= amount;
        this.element.height(this.size.y);
    };

    return PaddleClass;

})();