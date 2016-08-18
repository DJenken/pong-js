/**
 * Created by djenken on 17/08/2016.
 */


var game = (function() {

    function Game(){

        var self = this;
        //has two players
        this.p0 = new Player(0);

        this.p1 = new Player(1);

        this.ball = new Ball($(".ball"));

        this.score0 = $("#score0");
        this.score1 = $("#score1");

        //Populate the list of collidables for collision checking within the ball
        this.collidables = [];
        this.collidables.push(this.p0.paddle.element);
        this.collidables.push(this.p1.paddle.element);
        this.collidables.push($("#end-left"));
        this.collidables.push($("#end-right"));
        this.collidables.push($("#wall-top"));
        this.collidables.push($("#wall-bottom"));

    }

    Game.prototype.init = function(){
        this.initClickHandlers();
        this.p0.init();
        this.p1.init();
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
        this.p0.update();
        this.p1.update();
        //Ball position
        this.ball.update();
        this.ball.checkCollision(this.collidables);
        //Check for collisions


    };

    Game.prototype.render = function() {
        this.score0.html(this.p0.score);
        this.score1.html(this.p1.score);
    };

    Game.prototype.collisionCheck = function(){

        //If ball collides with wall
            //Bounce

        //If ball collides with Paddle
            //Calculate angle based on paddle velocity
            //Bounce

        //If ball collides with EndZone
            //Score
    };

    return new Game();


})();

//This is Main
$(document).ready(function(){
    game.init();
    game.run();
});