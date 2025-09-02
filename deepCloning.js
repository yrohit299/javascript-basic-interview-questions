// Deep Clone

const obj1 = {
    a: 1,
    b: 'hello',
    c: {
        d: 2
    },
    e: new Date(),
    f: undefined

}

// Method 1
const obj2Method1 = JSON.parse(JSON.stringify(obj1))
console.log(obj2Method1, 'Method 1')


// Method 2 Custom Function
function customClone(obj){
    let newObj = {}

    for(let key in obj){
        // console.log(obj[key]);
        const value = obj[key]
        if(value instanceof Date){
            newObj[key] = new Date(value.getTime())
        }
        if(typeof value === 'object'){
            newObj[key] = customClone(obj[key])
        } else {
            newObj[key] = value
        }
    }

    return newObj
}

const obj2 = customClone(obj1)

console.log(obj2, 'Method 2');

// Method 3 - Modern Javascript

const method3 = structuredClone(obj1)
console.log(method3, 'Method 3');