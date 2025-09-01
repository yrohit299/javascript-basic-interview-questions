// Method Chaining Function based
// calculate.add(2).subtract(3).multiply(2).value
const calculate ={
    value: 0,
    add: function(number){
        this.value = this.value + number
        return this
    },
    subtract: function(number){
        this.value =  this.value - number
        return this
    },
    multiply: function (number) {
        this.value = this.value * number
        return this
    },
    getValue(){
        return this.value
    },
    sum(...args){
        this.value = args.reduce((acc, currentValue)=> acc + currentValue,this.value) 
        return this
    }
}

const cal = calculate.add(5).subtract(3).multiply(2).sum(2,3,4).value
console.log(cal)