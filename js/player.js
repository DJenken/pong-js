/**
 * Created by Dylan Jenken on 17/08/2016.
 */

//Player Class
var Player = (function(){

    function PlayerClass(id){
        //Each Player has:
        this.id = id;
        this.score = 0;
        this.paddle = new Paddle($("#pad" + id + ""));
    }

    PlayerClass.prototype.init = function(){
        //Initialize input event handlers
        this.initControls();
    };

    //Main update loop, called by game
    PlayerClass.prototype.update = function(dt){
        //Update my paddle, passing delta time down the update chain
        this.paddle.update(dt);
    };

    PlayerClass.prototype.newGame = function(){
        this.score = 0;
        this.paddle.newGame();
    };

    PlayerClass.prototype.initControls = function(){
        var thePlayer = this;

        //Init Control handlers based on player ID
        switch(thePlayer.id){
            case 0:
                //W A S D
                document.addEventListener( 'keydown',
                    function( event ) {

                        switch ( event.keyCode ) {
                            case 87: // w
                                thePlayer.paddle.moveUp = true;
                                break;

                            case 65: // a
                                thePlayer.paddle.moveLeft = true;
                                break;

                            case 83: // s
                                thePlayer.paddle.moveDown = true;
                                break;

                            case 68: // d
                                thePlayer.paddle.moveRight = true;
                                break;
                        }
                    },
                    false
                );

                document.addEventListener( 'keyup',
                    function( event ) {

                        switch ( event.keyCode ) {
                            case 87: // w
                                thePlayer.paddle.moveUp = false;
                                break;

                            case 65: // a
                                thePlayer.paddle.moveLeft = false;
                                break;

                            case 83: // s
                                thePlayer.paddle.moveDown = false;
                                break;

                            case 68: // d
                                thePlayer.paddle.moveRight = false;
                                break;
                        }
                    },
                    false
                );
                break;

            case 1:
                //Up Down Left Right
                document.addEventListener( 'keydown',
                    function( event ) {

                        switch ( event.keyCode ) {

                            case 38: // up
                                thePlayer.paddle.moveUp = true;
                                break;

                            case 37: // left
                                thePlayer.paddle.moveLeft = true;
                                break;

                            case 40: // down
                                thePlayer.paddle.moveDown = true;
                                break;

                            case 39: // right
                                thePlayer.paddle.moveRight = true;
                                break;

                        }
                    },
                    false
                );
                document.addEventListener( 'keyup',
                    function( event ) {

                        switch ( event.keyCode ) {

                            case 38: // up
                                thePlayer.paddle.moveUp = false;
                                break;

                            case 37: // left
                                thePlayer.paddle.moveLeft = false;
                                break;

                            case 40: // down
                                thePlayer.paddle.moveDown = false;
                                break;

                            case 39: // right
                                thePlayer.paddle.moveRight = false;
                                break;
                        }
                    },
                    false
                );
                break;

            default:
                break;
        }

    };

    PlayerClass.prototype.addScore = function(){
        //player scores
        this.score++;
        //scoring player's paddle paddle shrinks
        this.paddle.shrink(4);
        //and scoring paddle's speed increases
        this.paddle.moveSpeed += 0.5;
    };

    return PlayerClass;
})();