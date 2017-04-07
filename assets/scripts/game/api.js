const config = require('../config')
const gameStore = require('../gameStore')
const store = require('../store')


const newGame = function() {
  console.log('new game back end ran')
  return $.ajax({
    method: 'POST',
    url: config.apiOrigin + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

//const cell = $('#game-board').children('').children('')
const value = gameStore.currentPlayer

const updateGame = function (cell,currentPlayer) {
  console.log('update game ran')
  return $.ajax({
    url: config.apiOrigin + '/games/' + 32,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
         'game': {
           'cell': {
             'index': cell,
             'value': currentPlayer
           }
         }
       }
     })
   }

   const updateGameStatus = function () {
     console.log('update game ran')
     return $.ajax({
       url: config.apiOrigin + '/games/' + 32,
       method: 'PATCH',
       headers: {
         Authorization: 'Token token=' + store.user.token
       },
       data: {
            'game': {
              'over': true
            }
          }
        })
      }




module.exports = {
 newGame,
 updateGame,
 updateGameStatus
}
