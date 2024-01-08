//Two types of memory -> Stack(PRIMITIVE) and Heap(NON-PRIMITIVE)
let myCourse = "javascript"
let anotherCourse = myCourse;
anotherCourse = "reactJs";
console.log(myCourse);
console.log(anotherCourse);

let user1 = {
    email: "user@email.com",
    upi: "user@ybl"
}
let user2 = user1;
user1.email = "abhi@email.com"
console.log(user1.email);//abhi@email.com
console.log(user2.email);//abhi@email.com

//note: if we store any primitive value then it will store on stack memory but when we store any any value in heap it gives a reference that's why we have to call heap value by reference.
/*
┌──────────────┐
│ ┌──────────┐ │
│ │  user2   │ │5
│ └──────────┘ │ 
│ ┌──────────┐ │
│ │   user1  │ │4
│ └──────────┘ │ 
│ ┌──────────┐ │
│ │ myCourse │ │3<-give me aa copy to anotherCourse = myCpurse
│ └──────────┘ │          
│ ┌──────────┐ │
│ anotherCourse│2
│ └──────────┘ │ 
│ ┌──────────┐ │
│ │ myCourse │ │1
│ └──────────┘ │ 
└──────────────┘
Stack memory

┌────────────────────────────┐
│  {                         │
│    email: "user@email.com",│<-call user1 by reference
│    upi: "user@ybl"         │
│}                           │
└────────────────────────────┘
Heap memory
*/