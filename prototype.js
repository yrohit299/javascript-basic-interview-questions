//1. Add sum method to Array

// Array.prototype.sum = function(){
//     let initialValue = 0
//     return this.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
// }

// let arr = [1,2,3,4,5,6]
// console.log(arr.sum())

//2. Add getLastYear method in date

const date = new Date()

// console.log(date.getFullYear());

Date.prototype.getLastYear = function(){
    return this.getFullYear() - 1
}

console.log(date.getLastYear());

// 3. Create eat method for Animal class
class Animal {
    constructor(name) {
        this.name = name
    }
}

Animal.prototype.eat = function(){
    return `${this.name} is eating`;
}

const dog = new Animal('Tikki');

console.log(dog.eat());