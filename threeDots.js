const ages = [5, 8, 9, 6];
const ages2 = [15, 18, 19, 16];
const ages3 = [25, 28, 29, 26];
const allAges = ages.concat(ages2).concat([100]).concat(ages3);
console.log(allAges);

//In ES6 its easy to connect more then one array by using three dots ...
const allAges2 = [...ages, ...ages2, 500, ...ages3];
console.log(allAges2);

//Math.max function for find out the max value;
const firstYearResult = 3.50;
const secondYearResult = 3.60;
const thirdYearResult = 3.75;
const finalYearResult = 3.90;
const bestResult = Math.max(firstYearResult, secondYearResult, thirdYearResult, finalYearResult);
console.log('Best result is ',bestResult);

//if we find out the array max value then we use three dots
const phonePrice = [1200, 1100, 4000, 4500];
const maxPhonePrice = Math.max(...phonePrice);
console.log('phone price: ',maxPhonePrice)

const names = ['sam', 'elf', 'fav', 'nis', 'durjoy'];
const largestName = Math.max(...largestName);
console.log(largestName);