//using seal() so object member cannot be deleted or added

const user = {
    firstName : "Vrushali",
    lastName : "Shinde",
    Age : 22,
    city : "nashik",
}

Object.seal(user)
console.log(user)

console.log(delete user.lastName)
console.log(user)