console.log(`A]. Creating a class "Bank" with data members & that all properties should be initialized using constructor..`);
class Bank {
   
    constructor(bankName, location, accountNo, ifsc, interestRate){
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifsc = ifsc;
        this.interestRate = interestRate
    }
}
let axisBank = new Bank("Axis Bank", "Pune", "AXIS0001256","AXIS3023","5%");
let sbiBank = new Bank("SBI Bank", "Mumbai", "SBI00083126","SBI8975","8%");
let iciciBank = new Bank("ICICI Bank", "Satara", "ICICI0004316","ICICI8063","6%");
let kotakBank = new Bank("Kotak Bank", "Karad", "KOTAK008963216","KOTAK3012","7%");
let hdfcBank = new Bank("HDFC Bank", "Surat", "HDFC00083126","HDFC1212","8%");
let panjabBank = new Bank("PANJAB Bank", "Gujrat", "PANJAB00082325","PANJAB4569","9%");
console.log(`B]. Creating Objects of Bank....`);
console.log(axisBank);
console.log(sbiBank);
console.log(iciciBank);
console.log(kotakBank);
console.log(hdfcBank);
console.log(panjabBank);

console.log(`--------------------------------------------------------------------------------------------------------------------------`);
console.log(`C]. Adding all object in array & traverse using for of loop & log on console only "Bank Name" & "Location"..`);

const myArray = [axisBank, sbiBank, iciciBank, kotakBank, hdfcBank, panjabBank];
for (const element of myArray) {
    console.log(`Bank Name: ${element.bankName} & Location: ${element.location}`);
}
// console.log(myArray);

console.log(`--------------------------------------------------------------------------------------------------------------------------`);
console.log(`D]. Find the object which has name--> "Kotak Bank" using for of loop...`);
for (const element of myArray) {
    if (element === kotakBank) {
        console.log(element);
    }
}

console.log(`--------------------------------------------------------------------------------------------------------------------------`);
console.log(`E]. Logging details on console using for loop... `);
for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index]);
    
}


