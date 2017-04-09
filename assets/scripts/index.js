'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const gameEvents = require('/Users/amandaabbott/wdi/projects/tic-tac-toe-client/assets/scripts/game/events.js')

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
  $(document).ready(gameEvents.hideBoard)
  //$(document).ready(gameEvents.gameRestart)

  // when a square is clicked grab the X or O that should be placed
  $('#game-board').children('').children('').on('click', gameEvents.setMark)
  $('.new-game-btn').on('click', gameEvents.gameRestart)
  $('.get-stats-btn').on('click', gameEvents.getGameStats)
})
