'use Strict'
// new game function to reset the gameboard and players - use for inital page load & game reset
const playerOne = "X"
const playerTwo = "0"
let currentPlayer = playerOne
const playerOneArray = []
const playerTwoArray= []
const winningCombinations = [
  {
    name: 'row 1',
    selections: [1, 2, 3]
  }]

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
  // Player One's Logic
  if (currentPlayer === playerOne) {
// if playerOne made a selection display X
    $('#' + this.id).text('X')
// push playerOne's selections to their array
    playerOneArray.push(this.id)
    console.log('Player One Selections:', playerOneArray)
    return playerOneArray
// does playerOne's Array match the winning combination?

// Player Two's Logic
  } else if (currentPlayer === playerTwo) {
// if player two made a selection display an O
    $('#' + this.id).text('O')
// push playerTwo's selection to their array
    playerTwoArray.push(this.id)
    console.log('Player Two Selections', playerTwoArray)
  }
  // prevent user from selecting same cell twice
  console.log(selectedCell, ' was pressed by', currentPlayer)
  $('#' + this.id).off('click')
  console.log('click off ran for: ', selectedCell)
  // push player's selection to their array
}

module.exports = {
  newGame,
  switchPlayers,
  setMark
}
