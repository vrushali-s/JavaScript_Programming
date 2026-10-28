const user = {
    firstName : "Vrushali",
    lastName : "Shinde",
    Age : 22,
    Address : {
        city : "malegaon",
        district : "nashik",
        pin : 425631
    }
}
console.log(user)
console.log(user.Address)
console.log(user.Address.district)
console.log(user['district'])   //undefined

user.Address.state = "Maharashtra"
console.log(user.Address)