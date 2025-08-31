// Sorting of Numbers

arr = [3,5,7,1,2,4,6]

const sortA = arr.sort((a,b) => a-b)

console.log(sortA)


// Sorting String

arrString = ["Oranges", "Apples", "Banana", "Watermelons", "Jackfruit"]
const sortB = arrString.sort((a,b) => a.localeCompare(b))
console.log(sortB)


// Sorting Mix array
arrMix = ["Oranges", 3, 7, "Apples", 4, 2, "Banana", 1, 5, "Watermelons", 6, "Jackfruit"]

const sortMix = arrMix.sort((a,b) => {
    isNumA = typeof a === 'number';
    isNumB = typeof b === 'number';

    if(isNumA && isNumB){
        return a-b
    } 
    if (!isNumA && !isNumB){
        return a.localeCompare(b)
    }

    return isNumA ? -1 : 1 //Number before string
})

console.log(sortMix)