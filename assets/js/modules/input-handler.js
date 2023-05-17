export class InputHandler {
  constructor() {
    /** @type {Set<Key>} */
    this.keys = new Set()

    window.addEventListener('keydown', ({ code }) => {
      if (Object.keys(Key).includes(code)) this.keys.add(code)
    })

    window.addEventListener('keyup', ({ code }) => this.keys.delete(code))
  }
}

// Énumération JS
export const Key = Object.freeze({
  ArrowDown: 'ArrowDown',
  ArrowUp: 'ArrowUp',
  ArrowLeft: 'ArrowLeft',
  ArrowRight: 'ArrowRight',
  Space: 'Space',
  Enter: 'Enter',
})
