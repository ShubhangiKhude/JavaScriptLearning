const arrayNumbers= [20,31,40,25,23,11,29,9,60,2,11];
console.log(`Given Array is:--> ${arrayNumbers}`);

console.log(`1]. Total elements available in the array are:--> ${arrayNumbers.length}`);
console.log(`----------------------------------------------------------------------------------------`);
console.log(`2]. First element in the array is:--> "${arrayNumbers[0]}" & Last element in the array is:--> "${arrayNumbers[arrayNumbers.length-1]}".`);
console.log(`----------------------------------------------------------------------------------------`);
console.log(`3]. Third last element using length property is:--> "${arrayNumbers[arrayNumbers.length-3]}"`);
console.log(`----------------------------------------------------------------------------------------`);
// console.log(`4]. All even numbers from the array is:`);
var finalEvenArray = [];
for (let index = 0; index <= arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element %2 == 0) {
        finalEvenArray = finalEvenArray.concat(element);
        }
    // console.log(element);  
 }
console.log(`4]. All even numbers from the array is: ${finalEvenArray} `);

console.log(`----------------------------------------------------------------------------------------`);

var finalOddArray = [];
for (let index = 0; index <= arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element %2 != 0) {
        finalOddArray = finalOddArray.concat(element);
        }
    // console.log(element);  
 }
console.log(`5]. All Odd numbers from the array is: ${finalOddArray} `);

console.log(`----------------------------------------------------------------------------------------`);


var finalArray = [];
for (let index = 0; index <= arrayNumbers.length; index++) {
    if (index %2 === 0 ) {
        finalArray = finalArray.concat(arrayNumbers[index]);
        // console.log(arrayNumbers[index]);
    }   
}
// var finalRes = finalArray.spilt("");
console.log(`6]. Even positioned element from array:--> ${finalArray}`);

console.log(`----------------------------------------------------------------------------------------`);

var finalArrayOddPOsition = [];
for (let index = 0; index <= arrayNumbers.length; index++) {
    if (index %2 != 0 ) {
        finalArrayOddPOsition = finalArrayOddPOsition.concat(arrayNumbers[index]);
        // console.log(arrayNumbers[index]);
    }   
}
// var finalRes = finalArray.spilt("");
console.log(`7]. Odd positioned element from array:--> ${finalArrayOddPOsition}.`);

console.log(`----------------------------------------------------------------------------------------`);

sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    sum= sum + arrayNumbers[index];   
}
console.log(`8]. Sum of all elements in the array is:-->${sum}`);

console.log(`----------------------------------------------------------------------------------------`);
var finalMul5Array = [];
for (var index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index] % 5 == 0) {
        finalMul5Array = finalMul5Array.concat(arrayNumbers[index]);
        // console.log(arrayNumbers[index]);
    }   
}
console.log(`9]. multiple of 5 in the array is:--> ${finalMul5Array}.`);

console.log(`----------------------------------------------------------------------------------------`);

console.log(`10]. To Check "115" number available in the array:-->`,arrayNumbers.includes(115) );

console.log(`----------------------------------------------------------------------------------------`);
console.log(`11]. To Check "23" number available in the array:-->`,arrayNumbers.includes(23) );

console.log(`----------------------------------------------------------------------------------------------`);
console.log(`12]. Before inserting number array is:--> ${arrayNumbers}`);
let insertElement = arrayNumbers.splice(3,0,55,66);
console.log(`After inserting number 55,66 before index 3 result is:--> ${arrayNumbers}`);

console.log(`-----------------------------------------------------------------------------------------------------`);
console.log(`13]. Before delete 3 elements starting from index 4 array is:--> ${arrayNumbers}`);
let deletThreeElement = arrayNumbers.splice(4,3)
console.log(`After deleting 3 elements from index 4 Result is:--> ${arrayNumbers}`);







