// Interview question
// multiply(2)(3)(4)(5)(6)(7)(8)(9)(10)()

function multiply(a){    
    return function(b){
        if(b) return multiply (a * b)
        return a
    }
}


console.log(multiply(2)(3)(4)(5)());

