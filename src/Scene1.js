import background from "./assets/background.png";
import ship1SS from "./assets/spritesheets/ship.png";
import ship2SS from "./assets/spritesheets/ship2.png";
import ship3SS from "./assets/spritesheets/ship3.png";
import boomSS from "./assets/spritesheets/explosion.png";
import upSS from "./assets/spritesheets/power-up.png";
import playerSS from "./assets/spritesheets/player.png";


export default class Scene1 extends Phaser.Scene{
    constructor(){
        super("bootGame");
    }

    preload(){
        this.load.image("background",background);
        this.load.spritesheet("ship",ship1SS,{
            frameWidth:16,
            frameHeight:16
        });

        this.load.spritesheet("ship2",ship2SS,{
            frameWidth:32,
            frameHeight:16
        });

        this.load.spritesheet("ship3",ship3SS,{
            frameWidth:32,
            frameHeight:32
        });
        
        
        this.load.spritesheet("explosion",boomSS,{
            frameWidth:16,
            frameHeight:16
        });

        this.load.spritesheet("power-up",upSS,{
            frameWidth:16,
            frameHeight:16
        });

        this.load.spritesheet("player",playerSS,{
            frameWidth:16,
            frameHeight:24
        });
    }

    create(){

        this.add.text(20,20,"Loading game...");
        setTimeout(()=>{
            this.scene.start("playGame");
        },1500);
        
        this.anims.create({
            key:"ship1_anim",
            frames:this.anims.generateFrameNumbers("ship"),
            frameRate:20,
            repeat:-1
        });

        this.anims.create({
            key:"ship2_anim",
            frames:this.anims.generateFrameNumbers("ship2"),
            frameRate:20,
            repeat:-1
        });

        this.anims.create({
            key:"ship3_anim",
            frames:this.anims.generateFrameNumbers("ship3"),
            frameRate:20,
            repeat:-1
        });

        this.anims.create({
            key:"explode",
            frames:this.anims.generateFrameNumbers("explosion"),
            frameRate:20,
            repeat:0,
            hideOnComplete:true
        });

        this.anims.create({
            key:"red",
            frames:this.anims.generateFrameNumbers("power-up",{
                start:0,
                end:1
            }),
            frameRate:20,
            repeat:-1
        });
        this.anims.create({
            key:"gray",
            frames:this.anims.generateFrameNumbers("power-up",{
                start:2,
                end:3
            }),
            frameRate:20,
            repeat:-1
        });

        this.anims.create({
            key:"thrust",
            frames:this.anims.generateFrameNumbers("player"),
            frameRate:20,
            repeat:-1
        });

    }
}