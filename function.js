// function input1(money) {
//     console.log(money);
//     console.log('this is my first function');
// }

// input1(400);


// function numbers(a,b,c,d,e){
//     console.log(a,b,c,d,e);
//     var sum = a+b+c+d+e;
//     console.log('the sum is:',sum);
// }
// numbers(1, 2, 3, 4, 5);


// function numbers(a,b,c,d,e){
//     console.log(a,b,c,d,e);
//     var sum = a+b+c+d+e;
//     // console.log('the sum is:',sum);
//     return sum;
// }

//   var total= numbers(1, 2, 3, 4, 5);
//   console.log('total od sum:',total);


// find average value using function

function myAverageNumber(assignment1, assignment2, assignment3) {
    
    const total= assignment1+assignment2+assignment3;
    const  value = total / 3;
    return value;


}

 const assignment1= 90;
 const assignment2= 80;
 const assignment3= 70;
   var  value = myAverageNumber(assignment1, assignment2,assignment3);
    
 console.log('My average number is:',value);