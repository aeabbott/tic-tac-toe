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


const updateGame = function (cell,currentPlayer) {
  console.log('update game ran')
  return $.ajax({
    url: config.apiOrigin + '/games/' + 43,
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
       url: config.apiOrigin + '/games/' + 33,
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
