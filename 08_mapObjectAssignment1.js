console.log(`A]. Created class "Bank" with data memebers & initialized using counstructor...`);
console.log(`-------------------------------------------------------------------------------------------------------`);
class Bank{

    constructor(bankName, location, accountNo, ifsc, interestRate){
        this.bankName = bankName,
        this.location = location,
        this.accountNo = accountNo,
        this.ifsc = ifsc,
        this.interestRate = interestRate
    }
}
console.log(`B]. Created objects of Bank...`);
const axisBank = new Bank("Axis Bank", "Pune", 10000458963, "AXIS0056", "5%");
const sbiBank = new Bank("SBI Bank", "Mumbai", 250003698542, "SBI0089", "7%");
const iciciBank = new Bank("ICICI Bank", "Surat", 360000749621, "ICICI0036", "6%");
const kotakBank = new Bank("Kotak Bank", "Dilhi", 3697000563478, "KOTAK0097", "8%");
const hdfcBank = new Bank("HDFC Bank", "Satara", 589630428633, "HDFC1256", "5%");
const panjabBank = new Bank("Panjab Bank", "Panjab", 970012458986, "PANJAB0056", "8%");

console.log(`-------------------------------------------------------------------------------------------------------`);
console.log(`C]. Created a map in such way that key should be "accountNo" & value is object...`);
const mapOFBank = new Map();
mapOFBank.set(10000458963, axisBank);
mapOFBank.set(250003698542, sbiBank);
mapOFBank.set(360000749621, iciciBank);
mapOFBank.set(3697000563478, kotakBank);
mapOFBank.set(589630428633, hdfcBank);
mapOFBank.set(970012458986, panjabBank);

const keyMapOfBank=  mapOFBank.keys();
console.log(keyMapOfBank);
console.log(``);
console.log(axisBank);
console.log(sbiBank);
console.log(iciciBank);
console.log(kotakBank);
console.log(hdfcBank);
console.log(panjabBank);

console.log(`-------------------------------------------------------------------------------------------------------`);
console.log(`D]. Traverse the map, Log bankName, accountNo, interestRate...`);
for (const key of keyMapOfBank) {
    const bankDetails = mapOFBank.get(key);
    console.log(`Bank Name:--> ${bankDetails.bankName}, Bank AccountNo:--> ${bankDetails.accountNo} & Bank InterestRate:--> ${bankDetails.interestRate}`);
}






