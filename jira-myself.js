
const jiraFunction = require('./config/user.js');

function getMyself(name, password, callback) {
    //    const jira = new JiraClient({
    //         host: 'jira.morning.agency',
    //         basic_auth: {
    //             username: name,
    //             password: password
    //         }
    //     });
    // console.log(jiraFunction);
    const jira = jiraFunction(name, password)

    jira.myself.getMyself(
        {},
        (error, me) => {
            console.log(me);
            callback(me)
        }
    )
}

module.exports = getMyself;