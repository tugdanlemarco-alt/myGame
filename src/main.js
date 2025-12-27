import k from "./kaplay_ctx";
import { make_player } from "./entities/player";
import { make_door, make_map } from "./system/Make_map";
import { make_dialog }  from "./system/dialogue";


// scene for the living room of the game
k.scene("livingRoom", () => {
    // set the camer position and scale in the living room
const cam = 230;

    k.setCamPos(cam, cam);
    k.setCamScale(2);     
  
            // calling the player in the scene
        const player = make_player(230, 230);
        // calling the function that makes the player move.
        player.setControls();
        make_map("map" ,"./public/sprites/tiled/json/living room.json");

const door = make_door();
const dialog = make_dialog();

k.onUpdate(() => {
    // if the key is realesed then the dialog wll dissapear
    if (k.isButtonPressed(k.buttons)) {
        dialog.dismiss();
            // k.debug.log("here");   
             }

});


// activate a function every second it collided
player.onCollide("door", () => {
dialog.say("hellp")
// TODO, Improve collision so that it will not glitch out
// TODO, give a pop up to enter key to go into other place like hallway,
// k.go("hallway");
            });
});




k.scene("hallway", () => {});


// scene for the main menu of the game 
k.scene("Main_menu", () => {});


// will play the scene living room
k.go("livingRoom");
