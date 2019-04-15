const JiraClient = require('jira-connector');

function jira(name, password) {
    
    const j= new JiraClient({
            host: 'jira.morning.agency',
            basic_auth: {
                username: name,
                password: password
            }
        })
        return {j}
}

module.exports=jira;
