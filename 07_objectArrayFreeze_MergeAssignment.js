console.log(`1]. Creating object of personal Details...`);
const personalDetails = {
    name : "Shubhangi",
    education: "BE-CSE",
    location: "Satara",
    age: 23,
    gender: "Female",
}
console.log(`Personal Details are:-->`,personalDetails);

console.log(`----------------------------------------------------------------------------------------------------------------------`);

console.log(`2]. Creating object of College Details...`);
const collegeDetails = {
    clgName : "K.B.P.College of Engineering",
    location : "Satara",
    university : "BATU",
    departments : function(){
           console.log(`There are total 6 Departments: 1]. Computer Science Engineering, 2]. Electronics Enineering, 3]. Civil Engg, 4]. Mechanical Engg, 5]. Production Engg, 6]. IT Engg`);
    }
}
console.log(`College Details are:-->`,collegeDetails);

console.log(`----------------------------------------------------------------------------------------------------------------------`);

console.log(`3]. After Merging above 2 Objects and logging details...`);
let mergeObjects = Object.assign(personalDetails,collegeDetails);
console.log(mergeObjects);

console.log(`----------------------------------------------------------------------------------------------------------------------`);
console.log(`4]. Creating an array of friends & freezing it`);
const arrayOfFriendsName = ["Sampada","Mohini", "Reshma", "Swapna", "Manuu"]
let freezeArray = Object.freeze(arrayOfFriendsName);
console.log(freezeArray);

console.log(`----------------------------------------------------------------------------------------------------------------------`);
console.log(`5]. Iterating step 4 using for of loop & log friend names...`);
for (const friendNames of freezeArray) {
    console.log(friendNames);
}

console.log(`----------------------------------------------------------------------------------------------------------------------`);
console.log(`6]. Given String is--> "Codemind Technology" from which Reversing only "Technology" word...`);
var myString = "Codemind Technology";
var EmptyString = "";

for (let index = myString.length-1; index >= 0; index--) {
    var myString1 = myString.charAt(index);
    // EmptyString = EmptyString + myString1;
    if (myString1 == " ") {
        break;
    }
    // console.log(EmptyString);
    EmptyString = EmptyString + myString1;
    
}
console.log(EmptyString);

var emptyString1 = " ";
for (let index = 0; index < myString.length; index++) {
    var myString1 = myString.charAt(index);

    if(myString1 == " "){
        break;
    }
    emptyString1 = emptyString1 + myString1; 
}
console.log(emptyString1);
console.log(EmptyString + emptyString1);


// for (let index = myString.length-1; index >= 9; index--) {
//     var myString1 = myString.charAt(index);
//     EmptyString= EmptyString + myString1;
//     // console.log(myString[index]);      
// }
// var newString = "Codemind";
// var concatString = newString+ " "+EmptyString;
// console.log(concatString);

