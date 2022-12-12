var square= function(num1){
    console.log("Square of" ,num1 ,"is:", num1*num1);
}
square(5);
square(6);
square(25);
square(100);
console.log("Type of function Name is:",typeof square);
console.log("------------------------------------------------------");

var areaOfRRectangle = function(len, width){
    console.log("Area of rectangle is:",len*width);
}
areaOfRRectangle(499,917);
console.log("------------------------------------------------------");

var swapValues= function(val1, val2){
     console.log("Before Swapping Values are:", val1, val2);
     var temp= val1;
     val1= val2;
     val2= temp;
     console.log("After Swapping Values are:", val1, val2);
}
swapValues("Virat","Anushka")
console.log(" ");
swapValues(1000, 2000)
console.log("------------------------------------------------------");

var givenString= function(myString){
    console.log("Given String is:", myString);
    console.log("A. Total character available in the string is:", myString.length);
    console.log("B. Character at index 6 is:", myString.charAt(6));
    console.log("C. Character at index 11 is:", myString.charAt(11));
    console.log("D. Last character of the string is:", myString.charAt(myString.length-1));
    console.log("E. first character of the String is:",myString.charAt(0));
    var totalLength= myString.length;
    console.log("F. Length of the String is:", totalLength ,"&" ,"Square of the Length is:",totalLength*totalLength);
}
givenString("JS the most popular language");