function display(){
    console.log("India is my Country..");
}
display();

function show(){
    console.log("Every day is a new beginning.");
}
show();
console.log("======================================================");

function personalDetails(firstName,lastName, collegeName){
    console.log("Personal Details:");
   console.log(firstName,lastName,collegeName);
}
personalDetails("Shubhangi", "Khude", "K.B.P. College of Engineering Satara.");
console.log("======================================================");

function swapValuesDude(value1, value2){
    console.log("Before Swapping Values:", value1, value2);
    var temp= value1;
    value1= value2;
    value2= temp;
    console.log("After Swapping Values:", value1, value2);
}
swapValuesDude("Virat","Anushka");
console.log("------------------------------------------------------");
swapValuesDude(1000, 2000);
console.log("======================================================");

function addThreeValues(val1, val2, val3){
    console.log("Addition of three values:", val1+ val2+ val3);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", "Good", "Morning");
