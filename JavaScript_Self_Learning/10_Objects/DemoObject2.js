const user1 = {
    firstName : "Vrushali",
    lastName : "Shinde",
    Age : 22
}

const user2 = {
    firstName : "Vrushali",
    lastName : "Shinde",
    Age : 22
}
console.log(user1 == user2)     //false --> because objects are compared by memory location not my values
console.log(user1.Age == user2.Age)     //true