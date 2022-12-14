var wordLengthSquare = function(value){
   console.log(`length of the "${value}" word:--> ${value.length} & Square of the "${value}" word is:--> ${value.length * value.length}`);
   //    return value.length* value.length;
}
wordLengthSquare("JavaScript");
wordLengthSquare("Google Chrome");
wordLengthSquare("Developer Smart");
// var sqRsult= value.length* value.length;
// console.log(`Square of the word is:-- ${sqRsult}`);
console.log("----------------------------------------------------------------------------------------------");

function myFun(){
    var myString= "I am Angular Developer";
    console.log(`length of the string is:--> ${myString.length}, Total No of words:--> ${myString.split(" ").length}`);
    var divStringResult = myString.length / myString.split(" ").length;
    console.log(`Length of the string "divide" by total no of words is :--> ${divStringResult}\n`);

    var mulStringResult = myString.length * myString.split(" ").length;
    console.log(`Length of the string "multiple" by total no of words is :--> ${mulStringResult}`);

}
myFun();