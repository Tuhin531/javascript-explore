/* var color = 'Yellow';

switch (color) {
    case 'red':
        console.log('You Maybe be in Danger do not cross the road.');
        break;
    case 'Yellow':
        console.log('You Should stop.Now traffic color is Yellow');
        break;
    case 'Green':
        console.log('You cross the road because color is green.');
        break;
    default:
        console.log('not attention');
} */

/* function foo()
{
    console.log('foo');
    bar();
}
function bar()
{
    console.log('bar');
}

foo();
bar();
*/

 /* function make_avg( a,b,c,d)
{
    var total = a+b+c+d;
    var avg = total / 4;
    // console.log(avg);
     return avg;
}

  var answer= make_avg(10, 20, 30, 40);
  console.log(answer); */


  function make_avg(array, size) {
    if (size <= 0) {
      // Handle invalid size
      return null;
    }
  
    let sum = 0;
  
    for (let i = 0; i < size; i++) {
      sum += array[i];
    }
  
    const average = sum / size;
    return average;
  }
  // Example usage:
  const numbers = [3, 5, 7, 10, 2];
  const arraySize = numbers.length;
  
  const result = make_avg(numbers, arraySize);
  
  if (result !== null) {
    console.log(`Average: ${result}`);
  } else {
    console.log("Invalid array size.");
  }
  
  
  
