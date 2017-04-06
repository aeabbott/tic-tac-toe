'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const gameEvents = require('./game/events')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

const authEvents = require('./auth/events.js')

$(() => {
  authEvents.addHandlers()
  $(document).ready(gameEvents.newGame)
  // when a square is clicked grab the X or O that should be placed
  $('#game-board').children('').children('').on('click', gameEvents.setMark)
  $('#game-board').children('').children('').on('click', gameEvents.switchPlayers)
})
