/**
 * Created by djenken on 17/08/2016.
 */


function Paddle(){

    //Paddle Has:
    //Position

    //Move Speed
    this.moveSpeed  = 2.0;
    //Size in units
    this.size       = 2.0;

}

Paddle.prototype.update = function(){
  //
};

//Paddle can:
//Move Up
Paddle.prototype.moveUp     = function(){

};
//Move Down
Paddle.prototype.moveDown   = function(){

};
//Change Size
Paddle.prototype.grow       = function(amount){

};

Paddle.prototype.shrink     = function(amount){
    //Size -= shrink amount
};