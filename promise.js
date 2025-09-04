// Promise and Promise chaining

function getSquare(n) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(n%2 === 0){
                resolve(n*n)
            } else {
                reject('Squares of odd numbers are not allowed')
            }
        }, 1000);
    })

    return promise 
}

getSquare(2)
.then(res => console.log(res))

