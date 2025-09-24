
function calculateFactorial(n){
   let factorial = 1;
   
   for(let nextNum = 1 ; nextNum <= n; nextNum++){
   
      factorial = factorial * nextNum;
     
   }
   
   return factorial

}
function resultSymbol(actualValue,expectedValue){
   const symbol = (actualValue === expectedValue) ? "✅" : "❌";

   return symbol;
   
}

function testfactorial(n,expectedValue){
const actualValue = calculateFactorial(n);
const message = resultSymbol(actualValue,expectedValue) + "The factorial of " + n + " is " + actualValue + " and was " + expectedValue;

console.log(message);

}
function testOfAll(){

   testfactorial(1,1);
   testfactorial(2,2);
   testfactorial(3,6);
   testfactorial(4,24);
   testfactorial(5,120)
   testfactorial(6,720);
}

testOfAll();
