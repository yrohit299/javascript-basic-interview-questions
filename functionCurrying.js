// function addCurrying(a){
//     return function(b){
//         return function(c){
//             return a + b + c
//         }
//     }
// }


const addCurrying = (a) => (b) => (c) => a + b + c;

// console.log(addCurrying(1)(2)(3))



// Ex: discount on dress

function discountDress(price){
    return function(discount){
        return price - (price * discount /100)
    }
}

const discount = discountDress(100)

console.log(discount(10))
