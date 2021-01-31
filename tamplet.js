const firstName = "Anup";
const lastName = "Paul";
//const fullName = firstName + " " + lastName + " is a good boy.";  //this is the oldest process
//console.log(fullName); 

const fullName = `${firstName} ${lastName} is a good boy.`; //this is the ES6 template for multiline
console.log(fullName);

// const multiline = "i love my Parents\n"
// + "My parents is my life\n"
// + "I am a hard-working person";
// console.log(multiline);    //for this we have to \n, + etc

const multiline = `i love my parents
My parents is my life
I am a hard-working person`;
console.log(multiline);  // in ES6 template this multiple line ane new line just declear in `` there