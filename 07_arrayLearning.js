let arrayOfName= [];
console.log(arrayOfName);

let arrayOfNumbers = [5, 10, 4, 6, 7, 10, 6]; // Empty Array
console.log(arrayOfNumbers);

console.log(`===== Total number of elements available in array ====`);
let totalElements = arrayOfNumbers.length;
console.log(`Total Elements in arrayOfNumbers --> ${totalElements}`);


let typeOfArray= typeof arrayOfNumbers;
console.log(`type of array is:--> ${typeOfArray}`); 

console.log(arrayOfNumbers[8]);

console.log(`=== Accessing array elements===`);
let elementAtZeroIndex = arrayOfNumbers[0];
console.log(`Element at Zero Index : ${elementAtZeroIndex}`);
console.log(`Element at Fifth Index : ${arrayOfNumbers[4]}`);

console.log(`Last Element : ${totalElements-1}`);

console.log(`When provided value is greater than length : ${arrayOfNumbers[9]}`);

arrayOfNumbers[2] = 100; // Update or Modify value using index
console.log(arrayOfNumbers);


let indexOf7 = arrayOfNumbers.indexOf(7);
console.log(`Index of element 7 --> ${indexOf7}`);

let indexOf10 = arrayOfNumbers.indexOf(10);
console.log(`Index of element 10 --> ${indexOf10}`);

console.log(`Traversing array:`);
for (let index = 0; index < arrayOfNumbers.length; index++) {
   console.log(arrayOfNumbers[index]);   
}

console.log(`--------------------------------------------`);

const array = [4, 6, 7, 8, 3, 2];
// var finalArray = [];

for (let index = (array.length-1); index >= 0; index--) {
   var element = array[index];
   
console.log(`Reverse element of array:-->${element}`);  

}



console.log(`--------------------------------------------`);

const array1 = [4, 6, 7, 8, 3, 2];
var finalArray = [];

for (let index = 0; index <= (array1.length-1); index++) {
   // const element = array1[index];
   if (array1[index] %2 == 0) {
         finalArray = finalArray + (array1[index]);
       }
   // console.log(element);  
}
var finalRes = finalArray.split("");
console.log(`even position of number:--> ${finalRes}`);

console.log(`----------------------26/12/22----------------------`);



console.log(`Traversing array using for loop in Reverse order`);
// initialization   condition  update 
let lastIndex = arrayOfNumbers.length-1;
for (let index = lastIndex; index >= 0; index--) {
    const element = arrayOfNumbers[index];
     console.log(element); 
}

console.log(`--------------------------------------------`);

// Array of salaries
console.log(`Accessing salary of each employee`);
let arrayOfSalaries = [10000, 20000, 30000, 20000, 40000];
let sumOfSal = 0;// 30000
for (let index = 0; index < arrayOfSalaries.length; index++) {
    const element = arrayOfSalaries[index];// 10000 20000 30000
    sumOfSal = sumOfSal+element;
}
console.log(`Total Salary of all employee is : ${sumOfSal}`);

console.log(`--------------------------------------------`);

console.log(`======== push() methods=========`);
var arrayOfNum = [4, 5, 6, 8, 9, 1];
console.log(arrayOfNum);
arrayOfNum.push(3);
console.log(arrayOfNum);
arrayOfNum.push(11,22,23);
console.log(arrayOfNum);
arrayOfNum.unshift(36);
console.log(arrayOfNum);     //add to start
arrayOfNum.unshift(91,92,93);
console.log(arrayOfNum);     //add to start


console.log(`======== pop() methods=========`);
var arrayOfNum1 = [4, 5, 6, 8, 9, 33];
let popResult = arrayOfNum1.pop();
console.log(popResult);
console.log(arrayOfNum1);

console.log(`======== shift() methods=========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33];
let shiftResult = arrayOfNum.shift();
console.log(shiftResult);
console.log(arrayOfNum);


console.log(`======== slice() methods=========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let sliceResult = arrayOfNum.slice(3);
let sliceRes = arrayOfNum.slice(2, 5);
console.log(arrayOfNum);
console.log(sliceResult);
console.log(sliceRes);


console.log(`======== splice() methods=========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
let spliceResult = arrayOfNum.splice(3);
console.log(`After using splice(3) method `);
console.log("Array after deleting elements ", arrayOfNum);
console.log("Total deleted elements: ", spliceResult);

var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
let spliceRes = arrayOfNum.splice(2, 3);
console.log(`After using splice(2, 3) method `);
console.log("Array after deleting elements ", arrayOfNum);
console.log("Total deleted elements: ", spliceRes);


console.log("====== Inserting element in the array =======");
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
arrayOfNum.splice(2, 0, 88);
console.log(arrayOfNum);
arrayOfNum.splice(1, 0, 55, 99, 22);
console.log(arrayOfNum);

console.log("====== Replacing element in the array =======");
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
arrayOfNum.splice(3, 1, 22);
console.log(arrayOfNum);
console.log("====== Replacing element in the array when splice(2, 3, 99, 77 ) =======");
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
arrayOfNum.splice(2, 3, 99, 77 );
console.log(arrayOfNum);


console.log(`======== for of loop ==========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
for (const element of arrayOfNum) {
    console.log(element);
}

console.log("==========include() ========");
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let isAvailable =  arrayOfNum.includes(9);
console.log(isAvailable);


console.log(`======== join() 27/12/22 ==========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let joinResult = arrayOfNum.join(" ");
console.log(joinResult);
console.log(typeof joinResult);

console.log(`======== concat() ==========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let arrayOfNames = ["Moni", "Jenny", "Shenny", "Tomy"];
let arrayOfCities = ["Pune", "Mumbai", "Banglore"];
const concatArray = arrayOfNum.concat(arrayOfNames, arrayOfCities);
console.log(concatArray);


console.log(`======== Resize an array ==========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum.length);
arrayOfNum.length = 5;
console.log(arrayOfNum);
console.log(arrayOfNum.length);















