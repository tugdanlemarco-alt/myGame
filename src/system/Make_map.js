import k from "../kaplay_ctx";

// code the make the map
// include the map sprite and its collision
 export async function make_map(sprite, json_location) {
  
const mapData = await (await fetch (json_location)).json();
const map = k.add([
        k.sprite(sprite),
        // k.rect(k.width(), k.height()),
        k.pos(0,0),   
        k.z(1),
    ]);

for (const layer of mapData.layers) {
if (layer.type === "floor") continue;

if (layer.type === "wall 1") continue;

if (layer.type === "door") continue;

if (layer.type === "door_1") continue;

if (layer.type === "furniture") continue;
// skip  all of the layer that is not a collider
if (layer.type === "small item") continue;

// code that if it encounter a collider layer in the mix, then it will add a collider to it
if (layer.name === "collider") {
      for (const object of layer.objects) {
        map.add([
          k.area({ shape: new k.Rect(k.vec2(0), object.width, object.height)}),
          k.body({ isStatic: true }),
          k.pos(object.x, object.y),
        ]);
      }
      continue;
    }
 }
}



export function make_door() {

 return k.add([
        k.sprite("bean"),
        // k.rect(k.width(), k.height()),
        k.pos(250,230),   
        k.z(3),
        k.body({ isStatic: true }),
        k.area(),
        "door", // indicate what name the object is is.
    {
      Game_Condition() {
        // TODO, put here the thing when colliding with these door
      }


    },
    
    
      ]);
// TODO, multiple door in one call function
};



   


