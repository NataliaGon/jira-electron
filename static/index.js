const { ipcRenderer } = require('electron')

const submitButton = document.getElementById('submit');
const btnMyself = document.getElementById('myself');
const container = document.getElementById('jira-api-container');

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    const username = document.getElementById('user-name').value;
    const password = document.getElementById('password').value;
    const newUser = { username: username, password: password }
    ipcRenderer.send('new-user', newUser)
});

btnMyself.addEventListener('click', function (event) {
    event.preventDefault();
    const username = document.getElementById('user-name').value;
    const password = document.getElementById('password').value;
    const newUser = { username: username, password: password }
    ipcRenderer.send('get-myself', newUser)
});

let html
ipcRenderer.on('issue', (event, issues) => {
    for (let i of issues.values){
        html += `<li class="issue">${i.name}</li>`
    }
    container.innerHTML = html
})
ipcRenderer.on('me', (event, me) => {


      let   htm = '<li class="issue">'+me.name+'</li>'
      htm += '<li class="issue">'+me.displayName+'</li>'
      htm += '<img src = '+me.avatarUrls+ '/>'
    container.innerHTML = htm
})