function isLeapYear(year) {
    var remainder = year % 4;

    if (remainder === 0) {

        return true;
        // console.log('This year leap year');
    }
    else {
        // console.log('This year is not leap year');
         return false;
    } 
}
  var input1 =  isLeapYear(1996);
  console.log('My year', input1);

  var input2 =  isLeapYear(1998);
  console.log('Her year', input2);