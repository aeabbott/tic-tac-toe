'use strict'
const gameStore = require('../gameStore')

const onSuccess = function (data) {
  gameStore.gameStore = data
   console.log('game success ran', gameStore.gameStore)

}

const onError = function (response) {
  console.error(response)
}


module.exports = {
  onSuccess,
  onError
}
