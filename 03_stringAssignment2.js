var stringHandsOn = function(){
    var myString = "    Hey you are doing good, keep it up    "
  console.log(`1.  Given String is:-- ${myString} \n`);
  console.log(`2.  Length of the String is:-- ${myString.length}`);

  var afterTrimString= myString.trim();
  console.log(`3.  After Removing leading & tralling extra spaces:-- ${afterTrimString}`);

  var newMyString = myString.trim().split(" ");
  console.log(`4.  Count of Remove extra spaces of the string:-- ${newMyString.length}`);

  console.log(`5.  After Trim first chatacter of the string is:-- ${afterTrimString.charAt(0)} & Last character of the string is:-- ${afterTrimString.charAt(afterTrimString.length-1)}`);
  
  console.log(`6.  Count total number of words available in the string after step 3 is:-- ${afterTrimString.length}`);

  console.log(`7.  Index of word "good" from given string is:-- ${afterTrimString.indexOf("good")}`);

  console.log(`8.  Substring starting from index 22 using Substring() & slice():-- ${afterTrimString.slice(22,)}`);

  console.log(`9.  Check is string ends up with words "up" after step 3:-- ${afterTrimString.endsWith("up")}`);

  console.log(`10. Check is string starts with word "Hey" after trimming:-- ${afterTrimString.startsWith("Hey")}`); 
}
stringHandsOn();