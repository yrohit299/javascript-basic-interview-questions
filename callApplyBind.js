const person1 = {
    name : 'Sachin',
    age : 20
}

const person2 = {
    name : 'Aarush',
    age : 6
}

function introduce(work, salary){
    console.log(`My name is ${this.name} and I'm ${this.age} years old. I go to ${work} and my salary is ${salary}`)
}

// introduce.call(person1, 'Office', 20000)
// introduce.call(person2, 'School', 0)

// introduce.apply(person1, ['Office', 20000])

const introP1 = introduce.bind(person1, 'Office', 2000)

introP1();


// Polyfill for bind

Function.prototype.myBind = function(ctx, ...args1){
    const fn = this

    return function(...args2){
        return fn.apply(ctx, [...args1, ...args2])

    }
}

Function.prototype.myBind2 = function(ctx, ...args1){
    const fn = this

    return function(...args2){
        return fn.call(ctx, ...args1, ...args2)

    }
}

const introP1Bind = introduce.myBind(person1, 'College', 1000)
introP1Bind()

const introP1Bind2 = introduce.myBind(person2, 'College 2', 2000)
introP1Bind2()


/*

1. What are call, apply, and bind used for in JavaScript?

They are methods of 'Function.prototype' used to explicitly set the value of this inside a function.

call → invokes a function immediately with arguments listed one by one.

apply → invokes a function immediately with arguments as an array.

bind → returns a new function with a fixed this (does not call immediately).


2. Polyfill for bind


*/