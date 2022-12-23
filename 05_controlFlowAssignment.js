var string= "I am very good IT Developer.";
console.log(`1]. Given String is :--> ${string}`);
var count = 0;
for (let index = 0; index < string.length; index++) {
       var charString = string.charAt(index);
       var charString = charString.toLowerCase();
       if(charString == "a" || charString == "e" || charString == "i" || charString == "o" || charString == "u"){
            //   console.log(charString);
              count = count +1;
            }
}
console.log(`Total number of the vowels in the string is:--> ${count}`);

console.log(`-------------------------------------------------------------`);

console.log(`2]. Sum of cube of numbers from 1 to 5..`);
function sumOfCube(){
    var sum = 0;

    for (let index = 1; index <= 5; index++) {
        var cube = (index*index*index);
        sum= sum + cube;
    
    }
    console.log(`(1*1*1) + (2*2*2) + (3*3*3) + (4*4*4) + (5*5*5):-->  ${sum}`);
}
sumOfCube();

console.log(`-------------------------------------------------------------`);

function oddPositionedChars(string){
    console.log(`Given String is:--> ${string}.`);
     var emptyString= "";
     var myString = string.split(" ").join("");
     console.log(myString);
     for (let index = 0; index < myString.length; index++) {
        if (index %2 != 0) {
            emptyString= emptyString+ myString[index];
        }
        
     }
     console.log(`Odd positioned chars in the string is:--> ${emptyString}.`);

}
oddPositionedChars("Hard work always pays back");
console.log(`-------------------------------------------------------------`);
oddPositionedChars("Soon I will be Angular IT champ");

// function oddPositionedChars(string){
//     //  var stringLength= string.length;
//      var myString = string.split(" ").join("");
//      var emptyString= "";
//     //  var myString = myString.join("");
//      console.log(myString);
//      for (let index = 1; index < myString.length; index = index+2) {
//             var stringResult = myString.charAt(index);
//         //   var finalStringResult = stringResult.split(" ").join("");
//           console.log(stringResult);

//      }
//      console.log(`odd positioned chars in the string is:-->${stringResult}`);

// }
// oddPositionedChars("Hard work always pays back");


