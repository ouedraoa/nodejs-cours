async function getUsers() {
    await  timeout(1000);
    return ([
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
    ]);
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function findUser(username) {
    const users = await getUsers();
    console.log(users);
    const user = users.find((user) => user.username === username);
    return user;
}

async function displayResult() {
    const user = await findUser('john');
    console.log(user);
}


displayResult();
