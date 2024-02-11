var num1  = 10; 
var num2  = 20;
// first way
// console.log(num1 , num2);
// const tempo = num1;
//  num1 = num2;
//  num2 = tempo;
// console.log(num1 , num2);


// second way

[num1 , num2]= [num2, num1];
console.log(num1, num2);