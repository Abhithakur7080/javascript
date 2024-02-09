// comes after ES6
class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const Abhi = new User("abhi", "abhi@gmeil.com", "123");
console.log(Abhi.encryptPassword());//123abc
console.log(Abhi.changeUsername());//ABHI

//same make as a function -> behind the scene
function User2(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}
User2.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}
User2.prototype.changeUsername = function(){
    return `${this.username.prototype()}`
}
const Abhi2 = new User("abhi", "abhi@gmeil.com", "123");
console.log(Abhi2.encryptPassword());//123abc
console.log(Abhi2.changeUsername());//ABHI