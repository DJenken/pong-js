/**
 * Created by Dylan Jenken on 17/08/2016.
 */

//Main game singleton
var game = (function() {

    //Declare a local object for private variables
    var local = {};

    function GameSingleton(){
        //Two Players
        this.p0 = new Player(0);
        this.p1 = new Player(1);
        //A Ball
        this.ball = new Ball($(".ball"));
        //And two scores
        this.score0 = $("#score0");
        this.score1 = $("#score1");

        //Populate a list of collidables for the ball's collision checking
        this.collidables = [];
        this.collidables.push($("#end-left"));
        this.collidables.push($("#end-right"));
        this.collidables.push(this.p0.paddle.element);
        this.collidables.push(this.p1.paddle.element);
        this.collidables.push($("#wall-top"));
        this.collidables.push($("#wall-bottom"));

        //Private variable declaration and assignment
        //Amount of spin on the ball when it hits a movign paddle
        local.spin = 1.5;
        local.time = 0;
    }

    GameSingleton.prototype.init = function(){
        this.initClickHandlers();
        $("#game-over").css("display", "none");
        this.p0.init();
        this.p1.init();
    };

    GameSingleton.prototype.initClickHandlers = function(){
        var self = this;
        //handle setup up UI buttons like Start, Restart, MainMenu, etc.

        //Start Button
        $("#start-btn").on('click', function(){
           self.run();
            $(this).css("display", "none");
        });

        //End Game Div
        $("#game-over").on('click', function(){
            self.newGame();
            $(this).css("display", "none");
        });
    };

    GameSingleton.prototype.run = function(){
        self = this;

        function frame(){
            //Calculate a new delta time every frame
            var now = new Date().getTime();
            var dt = now - (local.time || now);
            //Multiply for a time scale that isn't light speed
            dt *= 0.1;
            local.time = now;

            //Update and render, passing in delta time
            self.update(dt);
            self.render(dt);
            requestAnimationFrame(frame);
        }

        requestAnimationFrame(frame);
    };

    GameSingleton.prototype.update = function(dt){
        //Update:
        this.p0.update(dt);
        this.p1.update(dt);
        //Ball position
        this.ball.update(dt);
        //Check for collisions
        this.collisionCheck();
        //Check if game won
        this.winCheck();
    };

    GameSingleton.prototype.render = function(dt) {
        if(this.p0.score < 10) {
            this.score0.html("" + 0 + this.p0.score);
        }
        if(this.p1.score < 10) {
            this.score1.html("" + 0 + this.p1.score);
        }
    };
    //Check if game has been won
    GameSingleton.prototype.winCheck = function(){
        if(this.p0.score >= 10){
            this.endGame(0);
        }
        if(this.p1.score >= 10){
            this.endGame(1);
        }
    };
    //Check for collision
    GameSingleton.prototype.collisionCheck = function(){
        this.ball.checkCollision(this.collidables);
        //Needed a to do game logic stuff depending on the collided object
        //hence the 'hit' property
        //If the ball hit an endzone, do score stuff
        if(this.ball.hit.hasClass("endzone")){
            if(this.ball.hit.is("#end-right")){
                this.p0.addScore();
                this.ball.reset(1, this.ball.velocity.y);
            }else if (this.ball.hit.is("#end-left")){
                //p1 scores
                this.p1.addScore();
                //p1 serves to p0, left
                this.ball.reset(-1, this.ball.velocity.y);
            }
        //If the ball hit a paddle, bounce, and spin it if applicable
        }else if(this.ball.hit.hasClass("paddle")){

            //Apply spin to the ball
            if(this.ball.hit.is("#pad0")){
                if(this.p0.paddle.moveUp){
                    this.ball.velocity.y -= local.spin;
                }else if(this.p0.paddle.moveDown){
                    this.ball.velocity.y += local.spin;
                }
            }else if(this.ball.hit.is("#pad1")){
                if(this.p1.paddle.moveUp){
                    this.ball.velocity.y -= local.spin;
                }else if(this.p0.paddle.moveDown){
                    this.ball.velocity.y += local.spin;
                }
            }

            //Speed the ball up
            this.ball.velocity.x *= 1.25;
        }
    };

    GameSingleton.prototype.newGame = function(){
        this.p0.newGame();
        this.p1.newGame();
        this.ball.velocity = new v2(1,1);
    };

    GameSingleton.prototype.endGame = function(playerId){
        //Stop the ball
        this.ball.velocity.x = 0;
        this.ball.velocity.y = 0;
        //Display the game over div
        $("#game-over").html("Player " + (playerId + 1) + ' wins! </br> Play Again?');
        $("#game-over").css("display", "block");
    };

    return new GameSingleton();
})();

//This is the main app entry point
$(document).ready(function(){
    game.init();
});