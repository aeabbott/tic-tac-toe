'use Strict'
//require api folder from game so that events can pass info to back end
const gameApi = require('./api.js')
const gameUi = require('./ui.js')

let moveCount = 0
let playerOne = 'X'
let playerTwo = 'O'
let currentPlayer = playerOne
let gameBoard = new Array(9)
let over = false

// game Restart
const gameRestart = function (event) {
  $('#game-board').show()
  $('#game-stats').show()
  $('#game-status').show()
  $('#game-board').children('').children('').empty()
  console.log('game restart function was ran')
  moveCount = 0
  // currentPlayer = playerOne
  gameBoard = new Array(9)
  currentPlayer = playerOne
  over = false
  console.log('move count after restart is: ', moveCount, 'gameboard array is', gameBoard, 'current player is', currentPlayer)
  $('#game-board').children('').children('').off('click')
  $('#game-board').children('').children('').on('click', setMark)
  $('#game-status').text("Let's get ready to rumble")
  // create game object
  gameApi.newGame()
  .then(gameUi.onSuccess)
  .catch(gameUi.onError)
}

//log the array elements after each turn so that we can send the index and element over to the backend
//function logArrayElements(element, index, array) {
  //console.log('a[' + index + '] = ' + element)



/* if box was clicked by playerOne set box to "X" and push box
 cordinates to playerOne array if box was clicked by playerTwo
 set box to O and push box cordinates to playerTwo array */
const setMark = function (event) {
  const cells = this.id
  moveCount = moveCount += 1
  // Player One's Logic
  if (moveCount < 10) {
    console.log('game status', over)
    if (currentPlayer === playerOne) {
      // if playerOne made a selection display X
      $('#' + this.id).text('X')
      // push playerOne's selections to their array
      gameBoard.splice(this.id, 1, 'X')
      console.log('Player One Selections:', gameBoard)
      // does playerOne's Array match the winning combination?
      checkWin(gameBoard)
      gameApi.updateGame(cells, currentPlayer)
      .then(gameUi.onSuccess)
      .catch(gameUi.onError)
      // Player Two's Logic
    } else if (currentPlayer === playerTwo) {
      // if player two made a selection display an O
      $('#' + this.id).text('O')
      // push playerTwo's selection to their array
      gameBoard.splice(this.id, 1, 'O')
      console.log('Player Two Selections', gameBoard)
      checkWin(gameBoard)
      gameApi.updateGame(cells, currentPlayer)
      .then(gameUi.onSuccess)
      .catch(gameUi.onError)
    }
  }
  console.log('this is the number of total moves', moveCount)
  // prevent user from selecting same cell twice
  console.log(cells, ' was pressed by', currentPlayer)
  $('#' + this.id).off('click')
  console.log('click off ran for: ', this.id)
  switchPlayers()
}

// function to set the square to X or O depending one whose turn it is
const switchPlayers = function () {
  console.log('swtich player function was ran')
  // if current player is player one console log X
  if (currentPlayer === playerOne) {
    return (currentPlayer = playerTwo)
  } else if (currentPlayer === playerTwo) {
    return (currentPlayer = playerOne)
  }
}

/* 0 | 1 | 2
   3 | 4 | 5
   6 | 7 | 8 */

// check win
const checkWin = function () {
  // let win = false
  console.log('check win was ran')
    // check all the rows for a win
  if (gameBoard[0] && gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] ||
    gameBoard[3] && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5] ||
    gameBoard[6] && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8] ||
    // check all the columns for a win
    gameBoard[0] && gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] ||
    gameBoard[1] && gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] ||
    gameBoard[2] && gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] ||
    // check the diagonals
    gameBoard[0] && gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] ||
    gameBoard[2] && gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
    $('#game-board').children('').children('').off('click')
    $('#game-status').text(currentPlayer + ' is the winner')
    over = true
    gameApi.updateGameStatus(over)
    .then(gameUi.onSuccess)
    .catch(gameUi.onError)
  } else if (moveCount >= 9) {
    over = true
    gameApi.updateGameStatus(over)
    .then(gameUi.onSuccess)
    .catch(gameUi.onError)
    $('#game-status').text('Cats win!')
  }
}

const getGameStats = function (){
  console.log('get Game Stats ran')
  gameApi.indexGameStats()
  .then(gameUi.onSuccessStats)
  .catch(gameUi.onError)
}

const hideBoard = function() {
  $('#game-board').hide()
  $('.new-game-btn').hide()
  $('.get-stats-btn').hide()
  $('#game-stats').hide()
  $('#game-status').hide()

}


module.exports = {
  gameRestart,
  switchPlayers,
  setMark,
  getGameStats,
  hideBoard
}
