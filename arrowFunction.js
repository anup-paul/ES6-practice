//arrowFunction for single parameter
const doubleIt = num => num*2;
const result = doubleIt(50);
console.log(result);

//arrowFunction for multipleParameter
const add = (n1, n2) => n1 + n2;
const result2 = add(5, 50);
console.log(result2);

//without parameter
const give5 = () => 5
const result3 = give5();
console.log(result3);

//for multiple work in function and here we have to use return 
const doMath = (num1, num2) =>
{
    const sum = num1 + num2;
    const diff = num1 - num2;
    const result = sum * diff;  //for using const this result variable worked in this function
    return result;
}
const result4 = doMath(15,5);
console.log(result4);

