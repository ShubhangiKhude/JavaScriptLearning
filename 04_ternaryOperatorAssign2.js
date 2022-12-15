function maleMarriageEligibility(gender, age, boyName){
     var result = (gender == "Male" && age >= 21) ? "Eligible for marriage." : "Not Eligible for marriage.";
     console.log(`Hey "${boyName}" you are ${result}`); 
    //  console.log(`Hey "${boyName}" you are Not Eligible for marriage`); 
}
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 17, "Stew Jobs");

console.log("----------------------------------------------------");

function femaleMarriageEligibility(gender, age, girlName){
    var checkResult = (gender == "Female" && age >= 18) ? `Hey "${girlName}" you are eligible for marriage.` : `Hey "${girlName}" you are not eligible for marriege.`;
    return checkResult;

}
var finalResult = femaleMarriageEligibility("Female", 16, "Jenifer");
console.log(`${finalResult}`);
var finalResult1 = femaleMarriageEligibility("Female", 27, "Malinda Gates");
console.log(`${finalResult1}`);


