const friendsName = 'Anup';
//friendsName = 'Paul';  this is not works because in const variable can not be reassigned
console.log(friendsName);

//but in this position let can be works
//because let variable can be reassigned
let playerName = 'Sakib-Al-Hasan';
playerName  = "Tamim-Iqbal";  //for using let this works
console.log(playerName);

//In array if we use const then we can change array index and also we can use push,pop but we can not change full array
const idNumbers = [8324, 8370, 8274];
idNumbers[2] = 8424;
idNumbers.push(1845);
//idNumbers = [2,3,4,5]; this is not works
console.log(idNumbers);

//let is also a scope variable this work in the scope

let sum = 0;
for(let i = 0; i<10; i++)
{
    sum = sum + i;
    console.log(i);
}
console.log(sum); //this sum is works
//console.log(i); // this i is not works this i works in this scope;