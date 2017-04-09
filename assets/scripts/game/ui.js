'use strict'
const gameStore = require('../gameStore')
const getFormFields = require('../../../lib/get-form-fields')

const onSuccess = function (data) {
  gameStore.gameStore = data
   // console.log('game success ran', gameStore.gameStore)

}

const onError = function (response) {
  //console.error(response)
}

const onSuccessStats = function (data){
 // console.log('get Game stats was sucessful', data)
 //const getFormFields = require('../../../lib/get-form-fields')
 const games = Object.keys(data.games).length
$('#game-stats').text('You have played this many games:' + games)
// console.log(games)
}



module.exports = {
  onSuccess,
  onError,
  onSuccessStats
}
