console.log(`<----"Age is eligible for voting or not by using if block statement"---->`);
function eligibilityForVote(age){
    if(age == 0 || age <= 0 || age > 120){
        console.log(`The given age "${age}" is ----> Invalid data.`);
    }

    if(age >= 18 && age <= 100){
        console.log(`The given age "${age}" is ---> You are eligible for voting.`);
    }

    if(age >=1 && age <= 18){
        console.log(`The given age "${age}" is ---> You are not eligible for voting.`);
    }
}
eligibilityForVote(45);
eligibilityForVote(17);
eligibilityForVote(8);
eligibilityForVote(20);
eligibilityForVote(-10);
eligibilityForVote(200);
eligibilityForVote(0);

console.log(`------------------------------------------------------------------------`);

console.log(`<----"Grade Calculation by using if block statement"---->`);
function gradeCalculation(marks){
    if(marks >= 90 && marks <=100){
        console.log(`Funtastic marks:"${marks}", Your grade is A+.`);
    }

    if(marks >= 75 && marks < 90){
        console.log(`Excellent marks:"${marks}", Your grade is A.`);
    }

    if(marks >= 50 && marks <= 75){
        console.log(`Good marks:"${marks}", Your grade is B.`);
    }

    if(marks >= 35 && marks < 50){
        console.log(`Marks is "${marks}", Your grade is C, Need improvement.`);
    }

    if(marks ==0 || marks > 100 || marks <=0){
        console.log(`Given marks "${marks}" Please provide the valid marks..`);
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





