console.log(`1]. Define Vehicle class which has contain Properties, Constructor & create 5 Object from Vehicle class..`);
class Vehicle {
     name
     type
     model
     price
     color
     constructor(Name, Type, Model, Price, Color){
        this.name = Name;
        this.type = Type;
        this.model = Model;
        this.price = Price;
        this.color = Color
     }

}
let vehicleNo1 =new Vehicle("Suzuki Swift", "4 wheeler", "ZXI Plus AMT","8.85Lakh", "White");
let vehicleNo2 =new Vehicle("TVS Electric", "2 wheeler", "TVS IQube", "1.32Lakh","Red");
let vehicleNo3 =new Vehicle("BMW", "4 wheeler", "3 Series 2022","1.50Crore", "Black");
let vehicleNo4 =new Vehicle("Auto", "3 wheeler", "Bajaj RE Compact CNG","2.27Lakh", "Black");
let vehicleNo5 =new Vehicle("For Feista", "4 wheeler", "Trend Diesel","9.91Lakh", "White");
console.log(vehicleNo1);
console.log(vehicleNo2);
console.log(vehicleNo3);
console.log(vehicleNo4);
console.log(vehicleNo5);
console.log(`-------------------------------------------------------------------------------------------------------------------------`);

console.log(`2]. Define class College which contains Properties,Constructor & member function, Create 4 objects from College class..`);

class College {
    name;
    location;
    departments;
    univercity;
    constructor(Name, Location, Departments, Univercity){
        this.name= Name;
        this.location = Location;
        this.departments = Departments;
        this.univercity = Univercity
    }
    collegeDetails() {
        console.log(`Details of College are:-->`,this.name,this.location,this.departments,this.univercity);
    }
}
let collegeNo1 =new College("K.B.P. College", "Satara", "6", "Shivaji Univercity");
let collegeNo2 =new College("P.C.C.O.E College", "Pune", "7", "Pne Univercity");
let collegeNo3 =new College("V.J.T.I. College", "Mumbai", "6", "Mumbai Univercity");
let collegeNo4 =new College("K.I.T College", "Kolhapur", "8", "Shivaji Univercity");
collegeNo1.collegeDetails();
collegeNo2.collegeDetails();
collegeNo3.collegeDetails();
collegeNo4.collegeDetails();


console.log(`--------------------------------------------------------------------------------------------------`);

console.log(`3]. Traverse object by using for in loop...`);
function traverseObject(collegeNo){
    for (const key in collegeNo) {
        if (Object.hasOwnProperty.call(collegeNo, key)) {
            const element = collegeNo[key];
            console.log(`--> ${key}: ${element}`);
        }
    }
}
traverseObject(collegeNo1);
console.log(`-------------------------------------`);
traverseObject(collegeNo2);
console.log(`-------------------------------------`);
traverseObject(collegeNo3);
console.log(`-------------------------------------`);
traverseObject(collegeNo4);

// console.log(`----------------------------------------------------------`);
// console.log(`Fibonacci Series up to 7...`);

// let n = 7,n1= 0, n2 = 1, nextTerms;
// for (let index = 0; index < n; index++) {
//     console.log(n1);
//     nextTerms = n1 + n2;
//     n1= n2;
//     n2= nextTerms;
// }







