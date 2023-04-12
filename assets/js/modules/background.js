export class Background {
    destinationX = 0
    destinationY = 0
    width = 930
    speed = 60

    /**
     * @param {CanvasRenderingContext2D} ctx
     */
    constructor(ctx) {
        this.image = new Image()
        this.image.src = './assets/img/Background-930x360.jpg'

        this.ctx = ctx
    }

    draw() {
        this.ctx.drawImage(this.image, this.destinationX, this.destinationY)

        this.ctx.drawImage(
            this.image,
            this.destinationX + this.width,
            this.destinationY
        )
    }

    /**
     * @param {number} deltaTime
     * Laps de temps écoulé depuis le dernier update
     */
    update(deltaTime) {
        this.destinationX -= (deltaTime * this.speed) / 1000
        if (this.destinationX <= -this.width) this.destinationX = 0
    }
}
