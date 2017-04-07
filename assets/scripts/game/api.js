const config = require('../config')
const gameStore = require('../gameStore')
const store = require('../store')


const newGame = function() {
  console.log('new game back end ran')
  return $.ajax({
    method: 'POST',
    url: config.apiOrigin + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token ,
    },
    data: '{}'
  })
}


const update = function () {
  return $.ajax({
    url: config.apiOrigin + '/games/' + data.game.id,
    method: 'PATCH',
    data: {
      "game": {
        "cell": {
          "index": ,
          "value":
        },
        "over":
      }
}
  })
}



module.exports = {
 newGame
}
