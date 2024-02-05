// function sumOfNumbers(number)
// {
//     let sum = 0;
//     for (let i=1; i<=number; i++)
//     {
//         sum = sum+i;
//         console.log( sum)
//     }
//     return sum;
// }

// const input = sumOfNumbers(5);
// console.log(input);



// find factoriel value 
// function multiplicationOfNumbers(number) {
//     let result = 1;
//     for (let i = 1; i <= number; i++) {
//          result = result * i;
//         //     console.log( result)
//         // }
        
//     }
//     return result;
// }


//     const input = multiplicationOfNumbers(4);
//     console.log(input);




    function multiplicationOfNumbers(number) {
        let result = 1;
        for (let i = number; i>=1; i--) {
             result = result * i;
            //     console.log( result)
            // 
        
        }
        return result;
    }
    
         const number = 4;
         const fact =multiplicationOfNumbers(number)
    
        console.log('factorial of:' , number , fact);


        function print(a, b, c){
            
            return a+2;
            // return a*b;
            // return b*c+a;

          }
          console.log(print(1,2,3));