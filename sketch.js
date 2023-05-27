var bgimg, bg;
var carrotseedimg, potatoseedimg
var gameState = "wait"

var storybutton, mutebutton, musicbutton, nextbutton, playbutton
var ground,groundimg

function preload() {
    bgimg = loadImage("assets/splash.gif");
    groundimg=loadImage("assets/t29.JPG")
}


function setup() {
    createCanvas(windowWidth, windowHeight)
    playbutton = createImg("assets/play.png")
    playbutton.position(width - 160, 0)

    musicbutton = createImg("assets/music.png")
    musicbutton.position(width - 160, 150)

    mutebutton = createImg("assets/mute.png")
    mutebutton.position(width - 160, 150)
    mutebutton.hide()

    nextbutton = createImg("assets/rightarrow.gif")
    nextbutton.position(width - 100, height - 150)
    nextbutton.size(100, 100)
    nextbutton.hide()

    ground = createSprite(width / 2, height / 2)
    ground.addImage(groundimg)
    ground.visible=false
    groundimg.resize(width,height)
    ground.velocityX=-3
    ground.x=width/2

    


}

function draw() {
    if (gameState === "wait") {
        background(bgimg)
        nextbutton.hide()
    }

    playbutton.mousePressed(() => {
        gameState = "gamestory"
        playbutton.hide()
    })


    if (gameState === "gamestory") {
        // background(0)
        ground.visible = true
        if(ground.x>=width/2){
            ground.x=width
        }

    }



    musicbutton.mousePressed(() => {
        // gameState="mute"
        musicbutton.hide()
        mutebutton.show()
    })

    mutebutton.mousePressed(() => {
        // gameState="mute"
        musicbutton.show()
        mutebutton.hide()
    })

    drawSprites()
}

