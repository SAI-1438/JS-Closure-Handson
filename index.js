function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}
var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());
// Output:


let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();
// Output:

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
}
// Output:


// Write a code to calculate area of a rectangle using inner function. 
// In this case outer function should accept parameter length and inner function should accept parameter breadth.
function leng(l){
    function bret(b){
        area=l*b;
        
    }
    bret(10);
}
leng(20);
console.log(area);


// Take a variable in outer function and create an inner function to increase the counter every time it is called
function abc(){
  var counter = 10;
  function xyz(){
      console.log(counter+=1);
      return counter;
  }xyz();
}abc();

// Print Output:
var a = 12;
(function () {
  alert(a);
})();


// Output:
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();


// Output:outerArg = 123
//        innerArg = 456
//        outerVar = a
//        innerVar = b
//        globalVar = xyz
var globalVar = "xyz";
        (function outerFunc(outerArg) {
            var outerVar = 'a';
            (function innerFunc(innerArg) {
            var innerVar = 'b';
            
            console.log(
                "outerArg = " + outerArg + "\n" +
                "innerArg = " + innerArg + "\n" +
                "outerVar = " + outerVar + "\n" +
                "innerVar = " + innerVar + "\n" +
                "globalVar = " + globalVar);
            
            })(456);
        })(123);