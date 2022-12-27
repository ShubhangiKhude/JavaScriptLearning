function factorial(num){
var fact= 1;
    for (let index = 1; index <= num; index++) {
        fact= fact * index;   
    }
    console.log(`Factorial of "${num}" is:--> ${fact}`);
}
factorial(5);
factorial(7);
factorial(8);
factorial(12);

console.log(`--------------------------------------------------`);

function factorialNumber1(num) {
    console.log(`Given number is : ${num}`);

    var fact = 1; 
    for (var index = num; index >= 1; index--) {
        fact = fact * index; 
    }
    console.log(`${fact}`);
}
factorialNumber1(5);
factorialNumber1(7);
factorialNumber1(8);
factorialNumber1(12);

console.log(`--------------------------------------------------`);

function factorialNumber2(num) {
    console.log(`Given number is : ${num}`);
    var fact = 1; 
    while (num > 0) {
        fact = fact * num;
        num--;
    }
    console.log(`factorial of number :--> ${fact}`);
}
factorialNumber2(5);
factorialNumber2(7);









