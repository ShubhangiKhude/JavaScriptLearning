console.log(`Print number from 5 to 15 by increamenting 1`);
for (let index = 5; index <= 15; index++) {
    console.log(index);   
}

console.log(`Print number from 50 to 45 by decreamenting 1`);
for (let index = 50; index >= 40; index--) {
    console.log(index);   
}

console.log(`Fing 1st 15 odd numbers`);
for (let index = 1; index <= 15; index++) {
    if(index %2 != 0)
    console.log(index);      
}

console.log(`Fing 1st 10 odd numbers`);
for (let index = 1; index <= 10; index++) {
    if(index %2 == 0)
    console.log(index);      
}

console.log(`Print table of 5`); 
for (let index = 5; index <= 50; index=index+5) {
    console.log(index);
}

console.log(`Print table of 10`); 
for (let index = 10; index <= 100; index=index+10) {
    console.log(index);
}

console.log(`Print table of 10 in revert`); 
for (let index = 100; index >= 10; index=index-10) {
    console.log(index);
}



