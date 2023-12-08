function getUsers() {
    return [
      { username: 'john', email: 'john@test.com' },
      { username: 'jane', email: 'jane@test.com' },
    ];
  }
  
  function findUser(username) {
    const users = getUsers(); 
    const user = users.find((user) => user.username === username);
    return user;
  }

  function displayResult() {
    console.log(findUser('john'));
  }


displayResult();
  
