const playSound = require('play-sound')

const createPlayer = (opts = {}) => playSound(opts)
const instance = createPlayer({})

module.exports = {
  createPlayer,
  player: instance
}