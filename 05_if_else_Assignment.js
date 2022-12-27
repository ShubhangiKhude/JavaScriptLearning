console.log(`<----"Age is eligible for voting or not by using if else block statement"---->`);
var votingEligibility = function (age) {
  if (age == 0 || age <= 0 || age > 120) {
    console.log(`The given age "${age}" is---> Invalid Data.`);
  } else {
    if (age >= 18) {
      console.log(`The given age "${age}" is---> You are eligible for voting.`);
    } else {
      console.log(`The given age "${age}" is---> You are not eligible for voting.`);
    }
  }
}

votingEligibility(45);
votingEligibility(17);
votingEligibility(8);
votingEligibility(20);
votingEligibility(-10);
votingEligibility(200);
votingEligibility(0);

console.log( `------------------------------------------------------------------------`);

console.log(`<----"Grade Calculation by using if else block statement"---->`);
function gradeCalculation(marks) {
  if ((typeof marks) == "number") {
    // console.log(`Given marks is "${marks}",--> Please provide the valid marks.`);
  
  if (marks >= 90 && marks <= 100) {
    console.log(`Funtastic marks:"${marks}",--> Your grade is A+.`);
  }else{
    if(marks >= 75 && marks < 90){
    console.log(`Excellent marks:"${marks}",--> Your grade is A.`);
    }
    if(marks >= 50 && marks < 75){
    console.log(`Good marks:"${marks}",--> Your grade is B.`);       
    }
    if(marks >= 35 && marks < 50){
    console.log(`Given marks is:"${marks}",--> Your grade is C, Need improvement.`);
    }
    if(marks == 0 || marks < 0 || marks > 100){
        console.log(`Given marks is "${marks}",--> Please provide the valid marks.`);
    }
  }
  
    }else{
      console.log(`Given marks is "${marks}",--> Please provide the valid marks.`);

    }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");




