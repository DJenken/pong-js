/**
 * Created by djenken on 17/08/2016.
 */

function Player(id){

    //Each Player has:
    this.id = id;
    //Score
    this.score = 0;
    //Paddle
    this.paddle = new Paddle($("#pad" + id + ""));
}

Player.prototype.init = function(){
    this.initControls();
};

Player.prototype.initControls = function(){
    var thePlayer = this;

    //Init Controls based on player ID
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

Player.prototype.update = function(){
    this.paddle.update();
    //Test that score is rendering correctly
    //this.score++;
};
