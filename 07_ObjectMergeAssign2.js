const car = {
    carName: "Creta SX",
    company : "Hunda",
    launchYear : 2017
}

const carEngine = {
    enginPower : "1499CC",
    maxPower : "113 BHP"
}

console.log(`1]. Merging two object by using Object.assign()...`);
let mergeCar = Object.assign(car,carEngine);
console.log(`Details of car are:--> `,mergeCar);

console.log(`----------------------------------------------------------------------------------------------------------------------------`);

console.log(`2]. Merging two object by using Spread Operator...`);
let spreadCar = {...car,...carEngine};
console.log(`Details of car are:--> `,spreadCar);