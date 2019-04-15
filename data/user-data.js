'use strict'

const Store = require('electron-store')

class UserStore extends Store {
  constructor (settings) {
    super(settings)

    this.users = this.get('users') || []
  }

  saveUsers () {

    this.set('users', this.users)
 
    return this
  }

  getUsers () {

    this.users = this.get('users') || []
    return this
  }

  addUser (user) {
 
    this.users = [ ...this.users, user ]
    return this.saveTodos()
  }

  deleteUser (user) {

    this.users = this.users.filter(t => t !== user)
    return this.saveTodos()
  }
}

module.exports = UserStore
