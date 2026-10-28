const evenNumber = [20,40,60,80,100,]
console.log(evenNumber)

console.log("Removing first element : ",evenNumber.shift())  //removes first elements and shifts each index ahead
console.log(evenNumber)

console.log("adding element at first --> new length is :  ", evenNumber.unshift(120))     //add element at start
console.log(evenNumber) 


const oddDigit = [1,3,5]

console.log("concat()",oddDigit.concat(evenNumber))        //any original array does not change

animals = ['dog', 'cow', 'lion','cat', 'tiger', 'cat']
console.log("indexOf(): ", animals.indexOf('cat'))
console.log("indexOf(): ", animals.indexOf('Tiger'))    //case sensitive

console.log("includes(): ", animals.includes('tiger'))  ////case sensitive
console.log("includes(): ", animals.includes('zebra'))

animals[5] = "elephant"
console.log(animals)
console.log("reverse() ---> ", animals.reverse())

console.log("sort() ---> ", animals.sort())
console.log(animals)

console.log("sort() ---> ", evenNumber.sort())      //sort 1 - 2 -3 -4 ....

let fruits = ['apple', 'mango', 'banana', 'grapes','kiwi','papaya','coconut']

console.log("slice() ---> ", fruits.slice())
console.log("slice() ---> ", fruits.slice(2))
console.log("slice() ---> ", fruits.slice(2,5))

//splice() -- deletes elements
console.log("splice() ---> ", fruits.splice(2,2))        //start index, number of elements
console.log(fruits)

console.log("splice() ---> ", fruits.splice(2,2,'aaa'))        //start index, number of elements
console.log(fruits)
