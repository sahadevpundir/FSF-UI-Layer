const calculator=require('./calculator')

const cals = {
    add: calculator.add(50,10),
    sub: calculator.sub(50,10),
    mul:calculator.mul(50,10),
    div: calculator.div(50,10),
}

console.log("Addition is : "+cals.add);
console.log("Subtraction is : "+cals.sub);
console.log("Multiplication is : "+cals.mul);
console.log("Division is : "+cals.div);