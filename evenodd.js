function myNumber(number) {

    var checkNumber = number % 2;

    if (checkNumber === 0) {

        return true;
    //    console.log('this is even number');
    }
    else{
       
        return false;
    }
     
}



const input = myNumber(42);
console.log(input);

