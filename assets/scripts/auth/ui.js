'use strict'
const store = require('../store')
// const signOut = require('./events')

const signUpSuccess = (data) => {
  //console.log(data)
  $('.password-mismatch').hide()
  $('.bad-password').hide()
  $('.update-pass').hide()
}

const signUpFailure = (error) => {
  // console.error(error)
  $('.password-mismatch').show()
}

const signInSuccess = (data) => {
  // console.log('signIn success ran data is:', data)
  store.user = data.user
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('.new-game-btn').show()
  $('.get-stats-btn').show()
  $('#change-password').show()
  $('#sign-out').show()
  $('.password-mismatch').hide()
  $('.bad-password').hide()
  $('.update-pass').hide()

}

const signInFailure = (error) => {
  // console.error('signIn failed ran data is:', error)
  $('.bad-password').show()
}

const signOutSuccess = (data) => {
  // console.log('signOut success ran and nothing was return')
  store.user = null
  $('#sign-up').show()
  $('#sign-in').show()
  $('#game-board').hide()
  $('.new-game-btn').hide()
  $('.get-stats-btn').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#game-stats').hide()
  $('#game-status').hide()
  $('.update-pass').hide()
}

const signOutFailure = (error) => {
  // console.error('signIn failed ran data is:', error)
}

const changePasswordSuccess = (data) => {
  $('.update-pass').show()
  // console.log('changePassword was successful and data is:', data)
  store.user = data.user
}

const changePasswordFailure = (error) => {
  // console.error('signIn failed ran data is:', error)
  $('.update-pass').show().text('Password does not match existing password. Please try again')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
