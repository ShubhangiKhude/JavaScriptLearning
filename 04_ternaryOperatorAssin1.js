var myFun = function(num1, num2){
   var greatestNum = num1>num2 ? num1 : num2;
   console.log(`Greatest number between "${num1}" & "${num2}" is:--> ${greatestNum}`);
}
myFun(10, -10);
myFun(800,899);

console.log("-------------------------------------------------");

var checkEvenOddNum = function(n1){
      var checkEvenOdd = n1% 2 == 0 ? "True" : "False";
      console.log(`Given "${n1}" number is even:--> ${checkEvenOdd}`);
}
checkEvenOddNum(29);
checkEvenOddNum(44);
checkEvenOddNum(0);
checkEvenOddNum(101);

console.log("-------------------------------------------------");

var checkEvenOddLength = function(value){
    var newValue = value.length;
    var resultEvenOdd = newValue % 2 == 0 ? "Even" : "Odd"
    console.log(`Length of the "${value}" word is: ${resultEvenOdd}`);
}
checkEvenOddLength("JavaScript");
checkEvenOddLength("Developer");
checkEvenOddLength("Google");