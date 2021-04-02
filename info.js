// Object literal with 5 keys.
const alice = {
  firstName: 'Alice',
  lastName: 'Liddell',
  age: 28,
  language: ['Javascrip', 'Python', 'Php'],
}

const bob = {
  firstName: 'Bob',
  lastName: 'Lemon',
  age: 30,
  language: ['C++', 'Solidity', 'Vyper', 'Golang'],
}

const charlie = {
  firstName: 'Charlie',
  lastName: 'Charlot',
  age: 8,
  language: ['HTML', 'CSS']
}

// Function: return informations from an object.
const printInfo = (obj) => {
  console.log(`firstName: ${obj.firstName}`)
  console.log(`lastName: ${obj.lastName}`)
  console.log(`age: ${obj.age}`)
}

/* 
printInfo(alice)
printInfo(bob)
printInfo(charlie)
*/

// Function tthat return a boolean with a minimum number as a condition.
const canVote = (obj) => {
  if(obj.age >= 18) {
    return true;
  } else {
    return false;
  }
}

/*
console.log(canVote(alice))
console.log(canVote(bob))
console.log(canVote(charlie))
*/ 

// Function with 2 objects as parameters, to return the array with the most elements.
const mostSkilledDev = (obj1, obj2) => {
  if(obj1.language.length > obj2.language.length){
    return obj1.firstName
  }else if(obj2.language.length > obj1.language.length) {
    return obj2.firstName
  } else {
    return Draw
  }
}
console.log(mostSkilledDev(bob, alice))