import k from "../kaplay_ctx"

const h = 100;
    const pad = 16;
const cam = 230;

export function make_dialog() {
         
         const bg = k.add([
        
     k.pos(0 - cam, cam + 100),
             k.rect(k.width() - pad, h),
             k.color(0,0, 0),
             k.z(100),
   ]);

   const txt = k.add([
             k.text("hello", {
                 width: k.width(),
             }),
             k.pos(0 - pad, cam + h + pad),
             k.z(101),
         ]);


    bg.hidden = true;
    txt.hidden = true;


return {
            say(t) {
                txt.text = t;
                bg.hidden = false;
                txt.hidden = false;
            },
            dismiss() {
                txt.text = "";
                bg.hidden = true;
                txt.hidden = true;
            }, 
            active() {
                return !bg.hidden;
            },
            destroy() {
                bg.destroy();
                txt.destroy();
            },
        };

}



 
 
