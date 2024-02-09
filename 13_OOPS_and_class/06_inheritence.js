class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)//call previous User class 
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const Abhi = new Teacher("Abhi", "abhi@email.com", "123");
Abhi.addCourse();

const Abhi2 = new User("Abhi2");
// Abhi2.addCourse();//not have access to get Teacher class
Abhi2.logMe()

console.log(Abhi===Abhi2);//false
console.log(Abhi instanceof User);//true
console.log(Abhi instanceof Teacher);//true
console.log(Abhi2 instanceof User);//true
console.log(Abhi2 instanceof Teacher);//false