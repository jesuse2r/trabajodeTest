const { fromEuroToDollar,fromDollarToYen,fromYentoPound } = require('./app.js')

test("One euro should be 1.206 dollars",  function(){
    
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
   
    
})

test ("One dollar should be 153.48 yenes", function (){

  
    expect(fromDollarToYen(1)).toBe(153.48); 
})

test ("One yen should be 122.78 pounds", function (){
    
    
    expect(fromYentoPound(1)).toBe(122.78);
})