const path = require('path')
const { player } = require('../sound')
const audioPath = path.join(__dirname, './audios')

module.exports = {
  toneAlert: () => {
    player.play(audioPath + '/tone_alert.mp3')
  }
}
