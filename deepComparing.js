const obj1 = {
    a: 1,
    b: 'hello',
    c: {
        d: 2
    },
    e: new Date('2026-1-1'),
    f: undefined

}

const obj2 = {
    a: 1,
    b: 'hello',
    c: {
        d: 2
    },
    e: new Date('2026-1-1'),
    f: undefined

}

// const isEqual = JSON.stringify(obj1) === JSON.stringify(obj2)
// console.log(isEqual)

const compareObjects = (obj1, obj2) => {
    if(typeof obj1 !== 'object' || typeof obj2 !== 'object'){
        return false
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if(keys1.length !== keys2.length){
        return false
    }

    for (const key of keys1) {

        if(!obj2.hasOwnProperty(key)){
            return false
        }

        const val1 = obj1[key]
        const val2 = obj2[key]
        if(val1 instanceof Date && val2 instanceof Date){
            if(val1.getTime() !== val2.getTime()){
                return false
            }
        }
        else if(typeof val1 === 'object' && typeof val2 === 'object'){            
            if(!compareObjects(val1, val2)){
                return false
            }
        } else if(val1 !== val2 ){
            return false
        }
        
    }


    return true
}

console.log(compareObjects(obj1, obj2))