function add(num1,  num2 = 25)  // this the ES6 update version we can set default value in the function
{
    // if(num2 == undefined)    //this is the oldest way on set default
    // {
    //     num2 = 5;            // here we also use 0 for assign default value
    // }

    // num2 = num2 || 15;      //this is also a oldest one. In 15 we can also use 0;


     return num1+num2;
}
const total = add(25);
console.log(total);

const total2 = add(20, 20);   //here this value get priority first with default value
console.log(total2);