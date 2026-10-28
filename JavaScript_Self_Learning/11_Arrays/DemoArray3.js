//adding elements at end or removing 

let fruits = ['apple', 'mango', 'banana', 'grapes']
console.log(fruits)

fruits[fruits.length] = "Water melon"
console.log(fruits)

fruits.push("Papaya")
console.log(fruits)

fruits.push("coconut", null, "kiwi")
console.log(fruits)

fruits.pop()
console.log(fruits)

lastvalue = fruits.pop()
lastsecond = fruits.pop()
console.log(lastvalue)
console.log(lastsecond)
console.log(fruits)

//fruits.pop(2) does not work
//console.log(fruits)