const message = "Hello  Everyone"
console.log(message)
console.log(message[0])
console.log(message[3])
console.log(message[30])

console.log(message.length)
console.log(message.toLowerCase())
const captialMessage = message.toUpperCase()
console.log(captialMessage)
console.log(message)

const message1 = "  Hi i am Vrushali    "
console.log(message1)
console.log(message1.trim())
console.log(message1.trim().toUpperCase())  //chaining
console.log(message1.trimStart())
console.log(message1.trimEnd())

const message2 = 'Hello I am Computer Engineer'
console.log(message2.includes('nashik'))    //true
console.log(message2.includes('hello')) //case sensitive    //false
console.log(message2.includes('Pune'))  //false

console.log(message2.length)
console.log(message2.indexOf('I'))
console.log(message2.indexOf('computer')) //-1 if not present also case sensitive
console.log(message2.indexOf('Computer'))
console.log(message2.indexOf('I'))
console.log(message2.indexOf('E'))

replacedMessage = message.replace('Hello', 'Hi')
console.log(message)        //does not change original striing
console.log(message.replace('people','all'))
console.log(message2.replace('o', 'O'))
console.log(message2.replaceAll('e', 'E'))

concatString = message1.trim().concat(message2)
console.log(concatString)
console.log(concatString.concat(message,message1,message2))
console.log(message.concat('  @  ',message2))

const lastFourDigits = '4521'
console.log(lastFourDigits.padStart(16,'#'))
console.log(lastFourDigits.padEnd(16,'*'))

console.log(message2.charAt(9))
console.log(message.charCodeAt(1))  //return ascii number of character present at that index
console.log(message2.charCodeAt()) //bydeafult 0 index

console.log(message2.split(' '))
console.log(message2.split(''))
console.log(message2.split('e'))
console.log(message2.split())

//------------------------------------------
//      String template literal
//------------------------------------------

const concatenatedString = `Last four digit of my account number is `.concat(lastFourDigits)
console.log(concatenatedString)

templateString1 = `Last four digit of my account number is ${lastFourDigits}`
console.log(templateString1)
templateString2 = `Last four digit of my account number is ${lastFourDigits.padStart(14,'*')}`
console.log(templateString2)

const bankBanlance = 45685
templateString3 = `My bank balance isis $${bankBanlance}`
console.log(templateString3)

const addedString = templateString1 + " " + lastFourDigits
console.log(addedString)


