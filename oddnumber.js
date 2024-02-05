function getOddNumber(numbers) {
     const oddNumbers= [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[index];
        if(elements % 2 !== 0)
        {
            console.log('Find add number for array list:',index, elements);
            oddNumbers.push(elements);
        }
        
    }
    return oddNumbers;
}

const MyNumber = [10, 23, 34, 55, 67, 87, 9, 80];
// getOddNumber(MyNumber); 
const oddNumbers = getOddNumber(MyNumber); 
console.log(oddNumbers ); 