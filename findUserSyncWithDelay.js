function getUsers() {
  console.log("Begin get Users");
    let users = [];
    setTimeout(() => {
      console.log("Begin timeout");
      users = [
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ];
      console.log("After timeout", users);
    }, 30000);
    console.log("End get Users", users);

    return users;
  }
  
  function findUser(username) {
    const users = getUsers(); // A
    console.log("users", users);
    const user = users.find((user) => user.username === username); //B
    return user;
  }
  
  function displayResult() {
    console.log(findUser('john'));
  }


displayResult();
  