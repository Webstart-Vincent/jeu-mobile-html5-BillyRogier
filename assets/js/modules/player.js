export class Player {
    sourceX = 0
    sourceY = 0
    frameWidth = 100
    frameHeight = 100
    destinationX = 25
    destinationY = 120

    fps = 1000 / 12
    framesLength = 8

    /**
     * @param {CanvasRenderingContext2D} ctx
     */
    constructor(ctx) {
        this.image = new Image()
        this.image.src = './assets/img/player-spritesheet.png'

        this.ctx = ctx
    }

    draw() {
        this.ctx.drawImage(
            this.image,
            this.sourceX,
            this.sourceY,
            this.frameWidth,
            this.frameHeight,
            this.destinationX,
            this.destinationY,
            this.frameWidth,
            this.frameHeight
        )
    }

    /**
     * @param {number} timeStamp
     */
    update(timeStamp) {
        const frameIndex = Math.floor(timeStamp / this.fps) % this.framesLength
        this.sourceX = frameIndex * this.frameWidth
    }
}
