const JiraClient = require('jira-connector');

function getJira(name, password, callback) {
   const jira = new JiraClient({
        host: 'jira.morning.agency',
        basic_auth: {
            username: name,          
            password: password
        }
    });
    jira.board.getAllBoards(
        {},
        (error, board) => {
            console.log(board);
            callback(board)
        }
    )
}
	
module.exports= getJira;