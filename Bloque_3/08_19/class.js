const fs = require('fs');
const Calc = require('./calc.js');

const myCalc = new Calc();

// console.log(myCalc.suma(2,5));
// console.log(myCalc.resta(2,5));
// console.log(myCalc.multiplicacion(2,5));
// console.log(myCalc.division(4,2));




fs.appendFile('resultado.txt', "2 + 2 = " + myCalc.suma(2,2) + "\n", function (err) {
    if (err) throw err;
});

fs.appendFile('resultado.txt',"2 - 2 = " + myCalc.resta(2,2), function (err) {
    if (err) throw err;
});

fs.appendFile('resultado.txt',"2 * 2 = " + myCalc.multiplicacion(2,2) + "\n", function (err) {
    if (err) throw err;
});

fs.appendFile('resultado.txt',"2 / 2 =" + myCalc.division(2,2) + "\n", function (err) {
    if (err) throw err;
});






















// var mimodulo = require('fs');


// mimodulo.writeFile('myfile.txt','', function(err) {
//     if (err) throw err;
// });


// ----------------------

// console.log('Hello!');

// for (let index = 0; index < 10; index++) {
//     console.log(index);
    
// }

// const hobbies = ['read', 'watch movies', 'skydiving', 'swimming with sharks', 'eat'];

// for(let i=0; i<hobbies.length; i++) {
//     console.log(hobbies[i]);
// }

// hobbies.forEach(element => {
//     console.log(element);
// });