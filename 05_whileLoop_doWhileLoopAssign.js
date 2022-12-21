console.log(`<-- Using While & doWhile loop-->`);
console.log(`Numbers fron 5 to 15 using while loop`);
var num1= 5;
while (num1 <= 15) {
    console.log(num1);
    num1++;
}

console.log(`Numbers fron 50 to 40 using while loop`);
var num2= 50;
while (num2 >= 40) {
    console.log(num2);
    num2--;
}

console.log(`Fing first 15 odd numbers`);
var num3=1;
while (num3<= 15) {
    if (num3 %2 !=0) {
        console.log(num3);
    }
    num3++;
}

console.log(`Fing first 10 even numbers`);
var num4=1;
while (num4<= 10) {
    if (num4 %2 ==0) {
        console.log(num4);
    }
    num4++;
}

console.log(`print table 5`);
var num5 = 5;
 do {
    console.log(num5);
    num5= num5 + 5;
 } while (num5 <= 50);


 console.log(`print table 10`);
var num6 = 10;
 do {
    console.log(num6);
    num6= num6 + 10;
 } while (num6 <= 100);


 console.log(`print 10 table in reverse order`);
 var num7 = 100;
 do {
    console.log(num7);
    num7= num7 - 10;
 } while (num7 >= 10);


