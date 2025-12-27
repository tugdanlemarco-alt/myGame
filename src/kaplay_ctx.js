// cts meaning context or somehing

// "git log --all --graph" is used to show the branch of the current folder

// "git push origin main" is used to push the current sommit into github

// token

import kaplay from "kaplay";

// the context of the whole game, like the global variable
const k = kaplay({
width: 1280,
height: 1080,
background: [0,0,0],
letterbox: true,
global: false,
debug: true,
debugKey: "p",
// button config
        buttons: {
                confirm : {
                        keyboard: ["space", "enter"],
                },

                left: {
                        keyboard: ["left", "a"],
                },

                right: {
                        keyboard: ["right", "d"],
                },

                up: {
                        keyboard: ["up", "w"],
                },

                down: {
                        keyboard: ["down", "s"],
                },
        },
})

// had to add the src or the main file of this peice of shit
//  had to spend 3 hours why do the sprite wont load...
k.loadSprite("bean", "./sprites/spriteSheetCharacter/bean.png")
k.loadSprite("map", "./sprites/tiled/png_finish/living room.png")
k.loadSprite("player", "./sprites/spriteSheetCharacter/player.png",
    {
    sliceX: 4,
    sliceY: 5,
    anims: {
        // animation for the player
        idle: 0,
        walk_side_left: {from: 8, to: 11, speed: 6, loop: true,},      
        walk_side_right: {from: 8, to: 11, speed: 6, loop: true,},      
        walk_down: {from: 0, to: 3, speed: 6, loop: true},
        walk_up: {from: 16, to: 19, speed: 6, loop: true},
        walk_diagonal_up: { from: 12, to: 15, speed: 6, loop: true},
        walk_diagonal_down: {from: 4, to: 7, speed: 6, loop: true}, 
}
});

// used to export to other code or file
export default k;