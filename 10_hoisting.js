console.log(city);

var city = "Pune";


let state = "MH";
console.log(state);

show();             // normal function in hoisted...we can accessed before declaration..

function show(){
    console.log("Hello I am in show");
}

// display(); // function never hoisted..   


var display = function(){
    console.log("Hello I am in display");
}
display(); 


