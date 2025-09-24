
function interest(principal,time,rateOfInterest){

  const simpleInterest = (principal * rateOfInterest * time)/100;
  
  return simpleInterest;
}

function checkingCondition(actualValue,expectedValue){
  const check = actualValue === expectedValue ? "👍🏻" : "👎🏻" ; 
  return check;
}

function testInterest(expectedValue,p,t,r){
const actualValue = interest(p,t,r);
const message = checkingCondition(actualValue,expectedValue) + "interest of parameters ("+ p + ","  +  t + ","  + r + ") is " + actualValue + " and was " + expectedValue;
console.log(message);
}
function testOfAll(){
  testInterest(200,1000,2,10);
  testInterest(540,900,3,20);
  testInterest(1225,700,5,35);
  testInterest(1081.08,660,7,23.4);
}
testOfAll();
