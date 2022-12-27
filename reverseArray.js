// let array =[4,6,7,8,3,2];
// console.log(`Given array is : ${array}`);

// // console.log(array[2]);

// var arrayLength = array.length;
// // console.log(`${arrayLength}`);
// console.log(`Reverse array is:-->${array.reverse()}`);  

// for (let index = 0; index <= ((array.reverse()).length-1); index++) {
//     // const element = array[index];
// if (index %2 == 0) {
//     console.log((array.reverse())[index]);
// }
    
// }

let array = [4, 6, 7, 8, 3, 2];
console.log(`Given array is : ${array}`);
let newArray = array.reverse();
console.log(`Reverse of given array :${newArray}`);
var finalArray = [];
for (let index = 0; index <= newArray.length - 1; index++){
  if (index % 2 == 0){
    finalArray = finalArray + (newArray[index]);
      }
}
var finalRes = finalArray.split("");
console.log(`Even positioned Array : ${finalRes}`);