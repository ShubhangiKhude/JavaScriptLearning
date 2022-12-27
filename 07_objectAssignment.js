console.log(`==========Assignment 0A (Object)===========`);
console.log(`1]. Properties of professor object.`);
const professor = {
      
} 
professor.name = "Nilesh Deshmukh";
professor.college_Name = "K.B.P.College";
professor.age = 45;
professor.gender = "Male";
professor.address = "Pune";
professor.hieght = 5.9;
console.log(professor);

professor.degrees = { 
    engineering : "CSC",
    PHD    : "Adv Programming",
    Master_Of_Science : "Machine Learning",
    allDegrees: function(){
        return this.engineering + (", ")+this.PHD + (", ")+this.Master_Of_Science;
    }
};

professor.certificates = {
    certificate_1st : "Hacker Rank Participation",
    certificate_2nd : "IFE Courses",
    certificate_3rd : "Adv Programming"

}

console.log(`------------------------------------------------------------------------------------------------------`);

console.log(`2]. Include nested object 'degrees'...`);
console.log(professor.degrees);

console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`3]. Adding nested object "certificates"...`);
console.log(professor.certificates);

console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`4]. Adding function to concat all degrees..`);
console.log(professor.degrees);
let totalDegrees = professor.degrees.allDegrees();
console.log(`professor's total degrees are: ${totalDegrees}`);

console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`5]. Adding new prperty of professor..`);
professor.weight = 65;
console.log(`Adding new property Weight:`,professor.weight);
console.log(professor);

console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`6]. Modify exsisting value age..`);
professor.age= 55;
console.log(professor);

console.log(`-------------------------------------------------------------------------------------------------------------------`);
console.log(`7]. Delete any one certificate`);
console.log(professor.certificates);
let deleteCertificate = delete(professor.certificates.certificate_2nd);
console.log(`After deleting 2nd Certificate:`,professor.certificates);
// console.log(professor.certificates);

console.log(`-------------------------------------------------------------------------------------------------------------------`);

console.log(`8]. Adding new certificates..`);
professor.certificates.newCertificate = "Data Science";
console.log(professor.certificates);

console.log(`-------------------------------------------------------------------------------------------------------------------`);

console.log(`9]. log the nested object certificate on console`);
console.log(professor.certificates);



