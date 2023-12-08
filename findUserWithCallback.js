function getUsers(callback) {
    setTimeout(() => {
        callback([
            { username: 'john', email: 'john@test.com' },
            { username: 'jane', email: 'jane@test.com' },
        ]);
    }, 1000);
}

function findUser(username, callback) {
    getUsers((users) => {
        const user = users.find((user) => user.username === username);
        callback(user);
    });
}

function displayResult() {
    findUser('john', console.log);
}


displayResult();


