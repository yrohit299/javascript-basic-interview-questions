/*With Loops */
// function factorial(n){
//     let fact = 1;
//     for(let i = 1; i<=n; i++){
//         fact *= i
//     }

//     return fact;
// }

/*With recursion */
function factorial(n){
    if(n === 1){
        return 1
    }

    return n * factorial(n -1);
}

console.log(factorial(5))
