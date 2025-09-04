/**
 * Promise.all() - this method is used to execute all the promises at the same time. it will fail if any of the promises fails.
 * Promise.race() - this method is used to execute all the promises at the same time. it Executes the first promise that resolves.
 * Promise.allSettled() - this method is used to execute all the promises at the same time. it will always return the status of the promises.
 * Promise.any() - It ignores rejections until all promises reject.
 */

/**
 * race = "Whoever finishes first, win or lose, I'll take that."

 * any = "I'll wait until someone succeeds. Failures don’t matter unless everybody fails."
 */

// Promise.all
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 4000);
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 2000);
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(3)
    }, 3000);
})

// const promiseAll = Promise.all([promise1, promise2])
// promiseAll.then(res => console.log(res))

// const promiseAllSettled = Promise.allSettled([promise1, promise3])
// promiseAllSettled.then(res => console.log(res))

// const promiseRace= Promise.any([promise1, promise3])
// promiseRace.then(res => console.log(res))

const promiseAny= Promise.any([promise1, promise3])
promiseAny.then(res => console.log(res))