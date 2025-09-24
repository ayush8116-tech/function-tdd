function simpleInterest(p,frequencyTime,r){
  const simpleInterest = ( p * frequencyTime * r ) / 100;

  return simpleInterest;

}

function compoundInterest(p,t,r){
  let finalPrincipal;
  let finalSimpleInterest;
  const frequencyTime = 1;
  
  finalPrincipal = p + simpleInterest(p,frequencyTime,r);
  
  for(let n = 1; n <= t-1 ; n++ ){
   finalSimpleInterest = (finalPrincipal * frequencyTime *r)/100;
   finalPrincipal = finalPrincipal + finalSimpleInterest;
  
  }
  const interest = finalPrincipal - p;
  
 return interest ; 
 
} 

function checkingApprox(actualValue,expectedValue){
  const tolerance = 0.05;
  const difference = actualValue - expectedValue;
  const positiveDifference = ( difference < 0 ) ? -difference : difference; 

  const approxValue = positiveDifference < tolerance? "✅" : "❌" ;
  return approxValue;

}

function testCompoundInterest(expectedValue,p,t,r){
  const actualValue = compoundInterest(p,t,r);
  const message = checkingApprox(actualValue,expectedValue) + "compound interest with parameter (" + p + "," + t + "," + r + ") is " + actualValue + " and was " + expectedValue; 
  console.log(message);
  
}
function testOfAll(){

  testCompoundInterest( 331 , 1000 , 3 , 10 )
  testCompoundInterest( 512.5 , 5000 , 2 , 5 )
  testCompoundInterest( 5327.6 , 6468 , 8 , 7.8 ) 
  testCompoundInterest( 2563.98 , 7539 , 6, 5 )
   
}
testOfAll();
