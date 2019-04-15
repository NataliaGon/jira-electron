'use strict'

const path = require('path')
const { app, ipcMain } = require('electron')
const Window = require('./Window')
const UserStore = require('./data/user-data')
const getJira = require('./jira-api')
const getMyself= require('./jira-myself')
var JiraClient = require('jira-connector');
require('electron-reload')(__dirname)

// create a new todo store name "Todos Main"

const usersData = new UserStore({ name: 'Users Main' })

function main () {
  // todo list window
  let mainWindow = new Window({
    file: path.join('static', 'index.html')
  })

  mainWindow.webContents.openDevTools()

  function rend(data){
    mainWindow.send('issue', data);
  }
  function me(data){
    mainWindow.send('me', data);
  }

  ipcMain.on('new-user', (event, user ) => {
    getJira(user.username, user.password,rend)
  })
  ipcMain.on('get-myself', (event, user ) => {
    getMyself(user.username, user.password, me)
  })
}


app.on('ready', main)

app.on('window-all-closed', function () {
  app.quit()
})
