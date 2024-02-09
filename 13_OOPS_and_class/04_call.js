function setUsername(username){
    //complex DB calls
    this.username = username
}

function createUser(username, email, password){
    // setUsername(username)
    setUsername.call(this, username)
    //this use to set context then removed
    this.email = email
    this.password = password
}

const userOne = new createUser("Abhi", "a@email.com", "123")
// console.log(userOne);//True length is 14 || username not set?

// after correction
console.log(userOne);//username: 'Abhi', email: 'a@email.com', password: '123'