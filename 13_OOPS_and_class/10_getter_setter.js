class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    //value got to user
    get password(){//getter get 
        return this._password.toUpperCase()
    }
    //value setting
    set password(value){//setter never return
        this._password = value
    }
}
const abhi = new User("a@email.com", "abc")
console.log(abhi.password);


//how previous get and set  with properties
function User2(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}
const abhi2 = new User2("a@email.com", "abc")
console.log(abhi2.email, abhi2.password);


//using object
const User3 = {
    _email: "a@gmail.com",
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const abhi3 = Object.create(User3)
console.log(abhi3.email);//A@GMAIL.COM