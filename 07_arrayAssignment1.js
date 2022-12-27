const fruits_seasonal= ["Banana","Orange","Apple","mango","Water Melon"];
console.log(`Given Array with fruits name:-->`, fruits_seasonal);

console.log(`1]. First element of array is:--> "${fruits_seasonal[0]}" & Last element of array is:--> "${fruits_seasonal[fruits_seasonal.length-1]}"`);

console.log(`2]. Add element -> "Papaya" before the element "Banana"`);
let addFirstElement = fruits_seasonal.unshift("Papaya");
console.log(`    After added first element Array is:-->`, fruits_seasonal );
// console.log(fruits_seasonal);

console.log(`3]. Remove "Mango" from the array--> ${fruits_seasonal}`);
let removeSecLastElement= fruits_seasonal.splice(fruits_seasonal.length-2,1);
// console.log(removeSecLastElement); 
console.log(`Afeter removing "Mango" from the array is:-->`,fruits_seasonal);

console.log(`4]. Add element or insert an element "Pineappale" at the last position.`);
let inserLastPosition= fruits_seasonal.push("Pineapple");
// console.log(inserLastPosition);
console.log(`After adding "Pineapple" at the last position in the arrays is:-->`,fruits_seasonal);

console.log(`5]. Insert an element "Dragon Fruit" before "Water Melon"`);
let insertElement = fruits_seasonal.splice(4,0,"Dragon Fruit");
// console.log(insertElement);
console.log(`After inserting "Dragon Fruit" before "Water Melon":>`,fruits_seasonal);

console.log(`6]. Replace an element "Orange" with "Kiwi"`);
let replaceElement = fruits_seasonal.splice(2,1,"Kiwi");
// console.log(replaceElement);
console.log(`After replacing "Orange" with "Kiwi" Result is:-->`,fruits_seasonal);

console.log(`7]. Element Starting from 1 to 4 index`);
console.log(`Element Starting from index 1 to 4 result is:-->`,fruits_seasonal.slice(1,4));

console.log(`8]. Select last three element using length property.`);
console.log(`Last three element from Array Result is:-->`,fruits_seasonal.splice(fruits_seasonal.length-3,fruits_seasonal.length-1));