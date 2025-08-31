/* FlattenArray 

input = [[1,2], [3,4]]
output = [1,2,3,4]

*/

const arr = [[1,2], [3,4]] // 2-D Array
const arr2 = [1 , 2, [3,4, [5,6]]] // 3-D Array 


function FlattenArray(arr) {
    return arr.reduce((acc, currentValue) => {
        return acc.concat(Array.isArray(currentValue) ? FlattenArray(currentValue) : currentValue)
    }, [])
}


console.log(FlattenArray(arr))

console.log(FlattenArray(arr2))