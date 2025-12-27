import k from "../kaplay_ctx";


export function make_player(pos) {
    // function for character

return k.add([
    k.sprite("player", {anim: "idle"}),
    k.anchor("center"),
    k.area({
        shape: new k.Rect(k.vec2(0, 1), 16, 24),
    }),
    k.body(),
    k.scale(3),
    k.pos(pos),
    k.scale(1),
    k.z(2),
    "player",
        {
            speed: 80,
            // function for moovement
            setControls() {
                this.onUpdate(() => {
                
                // set the direction on the player
                const directionVector = k.vec2(0,0);
                
                //  gets the name of the current animation, this is for the animation of the player.
                const curAnimName = this.getCurAnim().name;



// the cartesian plane is inversed in this one, so the higher the y value,the lower it is, and so forth
                if (k.isButtonDown("left")) {
                    directionVector.x = -1;
                    // plays the animation for walking for left and so forth
                    if (curAnimName !== "walk_side_left" && directionVector.y == 0 && directionVector.x == -1) {
                        this.play("walk_side_left");
                        this.flipX = true;
                    }
                }                    

                if (k.isButtonDown("right")) {
                    directionVector.x = 1;
                    if (curAnimName !== "walk_side_right" && directionVector.y == 0 && directionVector.x == 1) {
                        this.play("walk_side_right");
                        this.flipX = false;
                    }
                }

                if (k.isButtonDown("up")) {
                    directionVector.y = -1;
                     if (curAnimName !== "walk_up" && directionVector.y == -1 && directionVector.x == 0) {
                        this.play("walk_up");
                    }
                }

                if (k.isButtonDown("down")) {
                    directionVector.y = 1;
                     if (curAnimName !== "walk_down" && directionVector.y == 1 && directionVector.x == 0) {
                        this.play("walk_down");
                    }
                }
            // make the movemtn be directional in case the player tap the up and side button so it doesnt speed up
                if (directionVector.x && directionVector.y) {
                        this.move(directionVector.scale()); 
                          
                }


             

            
               
                // if theres no movement, it will direct to idle
                if (!directionVector.x && !directionVector.y) {
                        this.play("idle");
                }
                    //  i dont know whats this code for but I guess its for locking the speed to any direction
                    this.move(directionVector.scale(this.speed));
                    // "this" is specifying the object beside it.
                
                    
                // return k.cancel();
                // make the function cancel
                // so it will cancel the movement on certain character
                })
            
            
            },
        },
    ]);
}
