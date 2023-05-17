import { Game } from '../game.js'
import { BananaSkin } from './banana-skin.js'

export class BananaSkinPool {
  /**
   *
   * @param {Game} game
   */
  constructor(game) {
    this.game = game

    /** @type {BananaSkin[]} */
    this.bananaSkins = []

    this.resetTimer()
  }

  resetTimer = () => {
    this.timer = 0
    this.nexTime = Math.random() * 500 + 1500 // Nombre aléatoire compris entre 1500 et 2000
  }

  /**
   * @param {number} timeStamp
   * @param {number} deltaTime
   */
  render = (timeStamp, deltaTime) => {
    if (this.timer >= this.nexTime) {
      this.activateNewBananaSkin()
      this.resetTimer()
    } else {
      this.timer += deltaTime
    }

    for (const activeBananaSkin of this.bananaSkins.filter((bs) => bs.isActive))
      activeBananaSkin.render(timeStamp, deltaTime)
  }

  activateNewBananaSkin = () => {
    const bananaSkin = this.bananaSkins.find((bs) => !bs.isActive)
    if (bananaSkin) bananaSkin.reset()
    else this.bananaSkins.push(new BananaSkin(this.game))
  }
}
