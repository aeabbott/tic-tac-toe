'use strict'
const store = require('../store')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log('signIn success ran data is:', data)
  store.user = data.user
}

const signInFailure = (error) => {
  console.error('signIn failed ran data is:', error)
}

const signOutSuccess = (data) => {
  console.log('signOut success ran and nothing was return')
  store.user = null
}

const signOutFailure = (error) => {
  console.error('signIn failed ran data is:', error)
}

const changePasswordSuccess = (data) => {
  console.log('changePassword was successful and data is:', data)
  store.user = data.user
}

const changePasswordFailure = (error) => {
  console.error('signIn failed ran data is:', error)
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
