function findOddSum(numbers)
{
    let sum= 0;

    for( let i=0; i<numbers.length; i++)
    {
        const index = i;
        const elements = numbers[index];
        sum =sum + elements;
        console.log('Array index number elements and sum', index, elements , sum);
    }
    return sum;
}
const myNumbers = [12, 14, 15, 34, 23, 14];
findOddSum(myNumbers);