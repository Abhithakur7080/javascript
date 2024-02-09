class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){ //use of static cannot be access by user
        return `123`
    }
}
const Abhi = new User("Abhi", "abhi@email.com", "123")
// console.log(Abhi.createId());//123 -> after use of static throw error

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email
    }
}
const xyz = new Teacher("xyz", "xyz@email.com", "123")
xyz.logMe()
// console.log(xyz.createId());//after use of static cannot be accessable