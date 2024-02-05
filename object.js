 /* var MyComputer =
{
    brand: 'apple',
    price: 1000,
    color: 'Silver',
    processor: 512,
}
console.log(MyComputer.color);

var priceCount= MyComputer.price;
console.log(priceCount);
var allProperties = Object.keys(MyComputer) ;
var allPropertiesValue = Object.values(MyComputer) ;
console.log(allPropertiesValue); */


/*var MyComputer =
{
    brand: 'apple',
    price: 1000,
    color: 'Silver',
    processor: 512,
}

var allProperties = Object.keys(MyComputer) ;
console.log(allProperties);

var allPropertiesValue = Object.values(MyComputer) ;
console.log(allPropertiesValue); */

// var MyComputer =
// {
//     brand: 'apple',
//     price: 1000,
//     color: 'Silver',
//     processor: 512,
// }

//  var penCount = MyComputer.price;
//   var propertiesName = 'price';
//   var propertiesValue = MyComputer[propertiesName];
//   console.log(propertiesName);
//   console.log(propertiesValue);


  /* MyComputer.price = 15;
  console.log(MyComputer);

  MyComputer['price'] = 15;
  console.log(MyComputer);

  MyComputer['propertiesName'] = 15;
  console.log(MyComputer); */


  function inchToFeet(inches)
  {
     
       var feet = inches / 12;
       return feet;
  }
  var input = 24;
  var output = inchToFeet(input);
  console.log(output);
 