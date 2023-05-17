import { Game } from './game.js'
import { Key } from './input-handler.js'

export class Player {
    sourceX = 0
    sourceY = 0
    destinationX = 25
    destinationY = 100

    fps = 1000 / 12 // 1s pour 12 frames (la cadence de l’animation)
    framesLength = 8 // Nombre de frames dans la ligne de la spritesheet

    speed = 3

    /**
     * @param {Game} game
     */
    constructor(game) {
        this.image = new Image()
        this.image.src = './assets/img/player-spritesheet.png'

        this.ctx = game.ctx
        this.inputKeys = game.inputHandler.keys

        this.frameWidth = 100
        this.frameHeight = 100

        const { canvas } = game
        this.maxDestinationX = canvas.width - this.frameWidth
        this.maxDestinationY = canvas.height - this.frameHeight
    }

    draw() {
        // La source c’est le fichier .png
        // La destination c’est le canvas
        this.ctx.drawImage(
            this.image,
            this.sourceX,
            this.sourceY,
            this.frameWidth, // cadrage dans la source
            this.frameHeight, // cadrage dans la source
            this.destinationX,
            this.destinationY,
            this.frameWidth, // dimension dans la destination
            this.frameHeight // dimension dans la destination
        )
    }

    /**
     * @param {number} timeStamp
     */
    update(timeStamp) {
        const frameIndex = Math.floor(timeStamp / this.fps) % this.framesLength
        this.sourceX = frameIndex * this.frameWidth

        if (this.inputKeys.has(Key.ArrowUp)) this.destinationY -= this.speed
        if (this.inputKeys.has(Key.ArrowRight)) this.destinationX += this.speed
        if (this.inputKeys.has(Key.ArrowDown)) this.destinationY += this.speed
        if (this.inputKeys.has(Key.ArrowLeft)) this.destinationX -= this.speed

        if (this.destinationY < 0) this.destinationY = 0
        if (this.destinationX < 0) this.destinationX = 0
        if (this.destinationY > this.maxDestinationY)
            this.destinationY = this.maxDestinationY
        if (this.destinationX > this.maxDestinationX)
            this.destinationX = this.maxDestinationX
    }
}
