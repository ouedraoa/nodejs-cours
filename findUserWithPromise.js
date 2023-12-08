function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ]);
    }, 1000);
  });
}


function findUser(username) {
  return new Promise((resolve, reject) => {
    const promise = getUsers();
    promise.then((users) => {
      const user = users.find((user) => user.username === username);
      resolve(user);
    }, error => {
      reject(error);
    });
  });
}

findUser('john')
  .then(user => {
    console.log(user);
  })

