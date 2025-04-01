// write a function to calculate the sum of all the odd numbers from the object

const sumOfAllNumericValueInObject = (obj) => {
    let objValues = Object.values(obj);

    //filter
    let numberValues = objValues.filter((item) => typeof(item) === "number");

    //reduce
    let sumOfNumbers = numberValues.reduce((accumulator, currentValue) => accumulator+currentValue, 0);
    return sumOfNumbers ;

    // the below code is correct but we can have an other alternative as well
    // let sum = 0;
    // objValues.map((item) => {
    //     if(typeof(item) === "number" ) {
    //         sum += item
    //     }
    // })
    // return sum;

}

const obj = {
    a: 16,
    b: 23,
    c: "62",
    d: 19,
    e: 12,
    f: 68,
    g: "42"
} // output -> 138

console.log(sumOfAllNumericValueInObject(obj));