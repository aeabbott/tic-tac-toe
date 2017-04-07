const config = require('../config')
const store = require('../store')
const gameStore = require('../gameStore.js')

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


const updateGame = function (cell,currentPlayer) {
  console.log('update game ran')
  return $.ajax({
    url: config.apiOrigin + '/games/' +  gameStore.gameStore.game.id,
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

   const updateGameStatus = function (over) {
     console.log('update game ran')
     return $.ajax({
       url: config.apiOrigin + '/games/' + gameStore.gameStore.game.id,
       method: 'PATCH',
       headers: {
         Authorization: 'Token token=' + store.user.token
       },
       data: {
            'game': {
              'over': over
            }
          }
        })
      }

      const indexGameStats = function () {
        return $.ajax({
          url: config.apiOrigin + '/games',
          method: 'GET',
          headers: {
            Authorization: 'Token token=' + store.user.token
          }
        })
      }




module.exports = {
 newGame,
 updateGame,
 updateGameStatus,
 indexGameStats
}
