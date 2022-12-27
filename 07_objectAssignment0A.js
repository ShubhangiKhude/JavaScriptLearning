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

    certificates : {
        certificate_1st : "Hacker Rank",
        certificate_2nd : "IFE Courses",
        certificate_3rd : "Adv Programming"
    },
    allDegrees: function(){
        return this.engineering.concat(this.PHD , this.Master_Of_Science);
    }
}
console.log(`2].` ,professor);
console.log(professor.degrees.certificates);

