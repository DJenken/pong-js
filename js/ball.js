/**
 * Created by Dylan Jenken on 17/08/2016.
 */

//Ball Class
var Ball = (function(){

    function BallClass(domElement){

        //The ball's Dom Element
        this.element    = domElement;

        //Ball is the game's ball, it has things like:
        //Position
        this.pos        = new v2(this.element.position().left, this.element.position().top);
        this.initialPos = this.pos;
        //Velocity
        this.velocity   = new v2(1, 1);
        //Size
        this.size       = new v2(domElement.width(), domElement.height());
        //Whatever the ball is currently colliding with, $() if nothing;
        this.hit        = $();


    }

    BallClass.prototype.init = function(){
        //Do any necessary ball init stuff here
    };

    BallClass.prototype.update = function(dt){
        //Move the ball, passing delta time down to be used
        this.move(dt);
    };

    BallClass.prototype.reset = function(velx, vely){
        this.pos = this.initialPos;
        this.element.css({ left : this.pos.x, top : this.pos.y });
        this.hit = $();
        this.velocity = new v2(velx * 2, 1);
    };

    //move the ball one step
    BallClass.prototype.move = function(dt){
        var pos = this.element.position();
        pos.left += this.velocity.x * dt;
        pos.top  += this.velocity.y * dt;
        this.element.css({ left : pos.left, top : pos.top });
        this.pos = new v2(pos.left, pos.top);
    };

    BallClass.prototype.checkCollision = function(collidables){
        //check against every collidable thing if the ball has collided
        for(var i = 0; i < collidables.length; i++)
        {
            var col = {};
            col.size = new v2(collidables[i].width(), collidables[i].height());
            col.pos  = new v2(collidables[i].position().left, collidables[i].position().top);

            //Collision check
            if( (this.pos.y + this.size.y) > col.pos.y &&
            this.pos.y < (col.pos.y + col.size.y) &&
            (this.pos.x + this.size.x) > col.pos.x &&
            this.pos.x < (col.pos.x + col.size.x)){
                this.hit = collidables[i];
                //if it hits a thing it can bounce off, do the bounce...
                if(collidables[i].hasClass("wall")) {
                    //Reverse direction y
                    this.velocity.y = -this.velocity.y;
                } else if(collidables[i].hasClass("paddle")) {
                    //reverse x direction
                    this.velocity.x = -this.velocity.x;
                }
                break;
            }else{
                //Didn't hit anything, so set hit to something that isn't hitable
                this.hit = $();
            }

        }

    };

return BallClass;
})();