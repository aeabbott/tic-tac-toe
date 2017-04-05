'use Strict'
// new game function to reset the gameboard and players - use for inital page load & game reset
const playerOne = "X"
const playerTwo = "0"
let currentPlayer = playerOne

const newGame = function () {
  console.log('ready for a new game!')
  const gameBoard = new Array(9)
  let moveCount = 0
  const currentPlayer = playerOne
  console.log(currentPlayer, 'is the one to start')
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

/* if box was clicked by playerOne set box to "X" and push box
 cordinates to playerOne array if box was clicked by playerTwo
 set box to O and push box cordinates to playerTwo array */
const setMark = function (event) {
  event.preventDefault()
  const selectedCell = this.id
  // set cell to display what the current player is
  if (currentPlayer === playerOne) {
    $('#' + this.id).text('X')
  } else if (currentPlayer === playerTwo) {
    $('#' + this.id).text('O')
  }
  // prevent user from selecting same cell twice
  console.log(selectedCell, ' was pressed by', currentPlayer)
  $('#' + this.id).off('click')
  console.log('no more clicking', selectedCell)
}

module.exports = {
  newGame,
  switchPlayers,
  setMark
}
