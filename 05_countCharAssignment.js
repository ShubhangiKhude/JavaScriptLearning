function countCharA(str){
console.log(`Given String--> "${str}"`);

    var counter = 0;
    for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);
        if (char == "a" || char == "A") {
            console.log(char);
            counter= counter + 1;
        }
        
    }
    console.log(`Total number of character "a" or "A"  available in the string is:--> ${counter}`);
}
countCharA("I AM Learning JavaScript, The Language of internet.");
console.log(`-----------------------------------------------------------------------`);
countCharA("My favourite movie is LAggAn.");
