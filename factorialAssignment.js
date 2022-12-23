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

function factorialNumber(num) {
    console.log(`Given number is : ${num}`);

    var fact = 1; 
    for (var index = num; index >= 1; index--) {
        fact = fact * index; 
    }
    console.log(`${fact}`);
}
factorialNumber(5);




