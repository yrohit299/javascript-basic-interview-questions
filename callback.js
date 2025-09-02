/**
 * callback is a function passed as an argument to another function.
 * callback is used to handle the response of an asynchronous operation.
 */

// Example: 
const add = (a, b, cb) => {
    setTimeout(() => {
        cb(a+b)
    }, 1000);
}


add(2,3,(res) => {
    console.log(res)
})


const square = (n, cb) => {
    setTimeout(() => {
        cb(n*n)
    }, 2000);
}


square(15, (res) => {
    console.log(res)
})