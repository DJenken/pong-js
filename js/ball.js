/**
 * Created by Dylan Jenken on 17/08/2016.
 */
function Ball(domElement){

    //Dom Element
    this.element    = domElement;
    //Ball is the game ball, it has things like:
    //Position
    this.pos        = new v2(this.element.position().left, this.element.position().top);
    this.initialPos = this.pos;
    this.velocity   = new v2(1, 1);
    //Size
    this.size       = new v2(domElement.width(), domElement.height());

    //And it checks for collision with:
    //Paddles
    //Walls
    //Endzones
    this.hit        = $();


}
Ball.prototype.init = function(){

};
Ball.prototype.update = function(){
    //Move the ball
    this.move();
};

Ball.prototype.reset = function(velx, vely){
    this.pos = this.initialPos;
    this.element.css({ left : this.pos.x, top : this.pos.y });
    this.hit = $();
    this.velocity = new v2(velx * 2, 1);
};

Ball.prototype.move = function(){
    var pos = this.element.position();
    pos.left += this.velocity.x;
    pos.top  += this.velocity.y;
    this.element.css({ left : pos.left, top : pos.top });
    this.pos = new v2(pos.left, pos.top);
};

Ball.prototype.checkCollision = function(collidables){
    //check against every collidable thing
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
            //if it hits a...
            if(collidables[i].hasClass("wall")) {
                //Reverse direction y
                this.velocity.y = -this.velocity.y;
            } else if(collidables[i].hasClass("ball")) {
                //reverse direction y and x

            } else if(collidables[i].hasClass("paddle")) {
                //reverse x direction
                this.velocity.x = -this.velocity.x;
            } else if(collidables[i].hasClass("endzone")){
            }
            break;
        }else{
            //Didn't hit anything
            this.hit = $();
        }

    }

};