/**
 * Created by djenken on 17/08/2016.
 */


var game = (function() {

    function Game(){

        var self = this;
        //has two players
        this.p0 = new Player();

        this.p1 = new Player();

        this.ball = new Ball($(".ball"));

    }

    Game.prototype.init = function(){
        this.initClickHandlers();
        this.update();
    };

    Game.prototype.initClickHandlers = function(){
        var self = this;
        //handle setup up UI buttons like Start, Restart, MainMenu, etc.

        //Start Button
            //this.start();

        //Quit Button
            //this.quit();
    };

    Game.prototype.start = function(){

    };

    Game.prototype.run = function(){
        self = this;
        function frame(){
            self.update();
            self.render();
            requestAnimationFrame(frame);
        }

        requestAnimationFrame(frame);
    };

    Game.prototype.update = function(){
        //Update:
        //Score
        //Ball position
        this.ball.update();
        //Paddle Positions

        //Check for collisions


    };

    Game.prototype.render = function() {

    };

    return new Game();


})();

//This is Main
$(document).ready(function(){
    game.init();
    game.run();
});