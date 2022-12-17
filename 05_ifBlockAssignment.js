console.log(`----"Check Even or Odd by using if block"----`);
function evenOrOdd(num){
    if(num %2 == 0){
           console.log(`Given ${num} number is Even.`);
    }
    if(num %2 !=0){
        console.log(`Given ${num} number is Odd.`);

    }
}
evenOrOdd(45);
evenOrOdd(70);
evenOrOdd(67);
evenOrOdd(98);

console.log(`-------------------------------------------------------`);

console.log(`----"Age is eligible for voting or not"----`);
function eligibilityForVote(age){
    if(age >= 18){
        console.log(`Yes, you are eligible for voting.`);
    }
    if(age < 18){
        console.log(`You are not eligible for voting.`);
    }
}
eligibilityForVote(18);
eligibilityForVote(20);
eligibilityForVote(17);
eligibilityForVote(40);

console.log(`--------------------------------------------------------`);

console.log(`--"Check is string contain more 10 character or not--"`);

function checkString(){
    var string = "JavaScript-ES6";
    var strLength = string.length;
    if(strLength >= 10){
        console.log(`String contains more than 10 character ${strLength}`);
    }
}
checkString();

console.log(`--------------------------------------------------------`);
console.log(`--"Check string start with Java--"`);

function startWithJava(){
    var string = "JavaScript Language";
    if(string.startsWith("Java")){
        console.log(`Yes, String start with Java.`);
    }
}
startWithJava();





