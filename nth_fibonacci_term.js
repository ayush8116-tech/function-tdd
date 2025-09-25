function nthFibonacciTerm(n){
  let curTerm = 0;
  let nextTerm = 1;
  let nthTerm;

  for(let numberOfTerms = 1 ; numberOfTerms <= n ; numberOfTerms++){   
   nthTerm = curTerm;

   const futurTerm = curTerm + nextTerm;
   curTerm = nextTerm;
   nextTerm = futurTerm;
   
      }

  return nthTerm

}

function resultSymbol(actualValue,expectedValue){
  const symbol = (actualValue === expectedValue) ? "✅" : "❌" ;
  return symbol;
}

function testFibonacci(n,expectedValue) {
  const actualValue = nthFibonacciTerm(n);
  const symbolMessage = resultSymbol(actualValue,expectedValue);
  const actualValueMessage = "The " + n +"th term of fibonacci series is " + actualValue ; 
  const expectedValueMessage = " and was " + expectedValue;

  const message = symbolMessage + actualValueMessage + expectedValueMessage;  
  console.log(message);
}
function testOfAll(){
  testFibonacci(1,0);
  testFibonacci(2,1);
  testFibonacci(3,1);
  testFibonacci(4,2);
  testFibonacci(5,3);
  testFibonacci(6,5);
  testFibonacci(7,8);

  
}
testOfAll()

