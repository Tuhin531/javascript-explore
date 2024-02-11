function maxInArray(numbers) {
    //  console.log('the array elements is', numbers);
    let largest = numbers[0];
    for(let i= 0; i<numbers.length; i++){
        
        const index = i;
        const elements = numbers[index];
        // console.log(elements);
        if(elements > largest)
        {
            largest= elements;
        }
        

    }
    return largest;

}
const height = [167, 120, 190, 167, 137, 300];
const tallest = maxInArray(height);
console.log('tallest person is: ', tallest);