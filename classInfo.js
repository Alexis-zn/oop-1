// class template i'll use for my objects.
class Human {
  constructor(firstName, lastName, age, language){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.language = language
}
// Function: return informations from an object.  
  printInfo() {
    console.log(`firstName: ${this.firstName}`)
    console.log(`lastName: ${this.lastName}`)
    console.log(`age: ${this.age}`)
    console.log(`language: ${this.language}`)
}
// Function tthat return a boolean with a minimum number has a condition.  
  canVote() {
    if(this.age >= 18) {
    return true;
  } else {
    return false;
  }
}
// Function with 2 objects as parameters, to return the array with the most elements.  
  mostSkilledDev(human) {
    if(this.language.length > human.language.length){
    return this.firstName
  }else if(human.language.length > this.language.length) {
    return human.firstName
  } else {
    return "draw"
  }
}
}

// All the var, instance of 'class Human' .
const alice = new Human('Alice', 'Liddell', 28, ['Javascrip', 'Python', 'Php'] )
const bob = new Human('Bob', 'Lemon', 30, ['C++', 'Solidity', 'Vyper', 'Golang'])
const charlie = new Human('Charlie', 'Charlot', 8, ['HTML', 'CSS'])

alice.printInfo()
console.log(charlie.canVote())
console.log(charlie.mostSkilledDev(alice)) 