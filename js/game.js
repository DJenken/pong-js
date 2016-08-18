/**
 * Created by Dylan Jenken on 17/08/2016.
 */


var game = (function() {

    var local = {};

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
        this.collidables.push($("#end-left"));
        this.collidables.push($("#end-right"));
        this.collidables.push(this.p0.paddle.element);
        this.collidables.push(this.p1.paddle.element);
        this.collidables.push($("#wall-top"));
        this.collidables.push($("#wall-bottom"));

        local.spin = 1.5;
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
        $("#start-btn").on('click', function(){
           self.run();
            $(this).css("display", "none");
        });

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
        this.collisionCheck();
        //Check for collisions


    };

    Game.prototype.render = function() {
        if(this.p0.score < 10) {
            this.score0.html("" + 0 + this.p0.score);
        }
        if(this.p1.score < 10) {
            this.score1.html("" + 0 + this.p1.score);
        }
    };

    Game.prototype.collisionCheck = function(){
        this.ball.checkCollision(this.collidables);
        if(this.ball.hit.hasClass("endzone")){
            if(this.ball.hit.is("#end-right")){
                //p0 scores
                this.p0.score++;
                //p0 serves to p1, right
                this.ball.reset(1, this.ball.velocity.y);
            }else if (this.ball.hit.is("#end-left")){
                //p1 scores
                this.p1.score++;
                //p1 serves to p0, left
                this.ball.reset(-1, this.ball.velocity.y);
            }

        }else if(this.ball.hit.hasClass("paddle")){

            //Put spin on the ball
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

    return new Game();


})();

//This is Main
$(document).ready(function(){
    game.init();
    //game.run();
});