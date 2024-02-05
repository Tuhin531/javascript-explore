var MyShopping =
{
    Brand: 'apple',
    price: 1000,
    color: 'Silver',
    processor: 512,
    Shirt: 'zara',
    location: 'Germany'
}
//    this is array var MyPropertiesKey = [ 'Brand', 'price', 'color', 'processor', 'Shirt', 'location' ]
 var MyPropertiesKey = Object.keys(MyShopping)
 console.log(MyPropertiesKey);

 var MyPropertiesValue = Object.values(MyShopping)
 console.log(MyPropertiesValue);

 for( var i = 0;  i < MyPropertiesKey.length; i++)
 {
    var propertiesName = MyPropertiesKey[i];
    var  propertiesValue = MyPropertiesValue [propertiesName];
    console.log(propertiesName, propertiesValue);
  
 }

