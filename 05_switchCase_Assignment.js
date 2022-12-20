console.log(`<----"Checking Month by using switch case"---->`);
function monthOfYear(monthNumber){
    var monthNumber;
    switch(monthNumber){
        case 1: 
        console.log(`This month is:--> January`);
        break;

        case 2: 
        console.log(`This month is:--> february`);
        break;

        case 3: 
        console.log(`This month is--> March`);
        break;

        case 4: 
        console.log(`This month is--> April.`);
        break;

        case 5:
        console.log(`This month is:--> May`);
        break;

        case 6:
        console.log(`This month is:-->June`);
        break;

        case 7: 
        console.log(`This month is:--> Jully`);
        break;

        case 8: 
        console.log(`This month is:--> August`);
        break;

        case 9: 
        console.log(`This month is:--> September`);
        break;

        case 10: 
        console.log(`This month is:--> octomber`);
        break;

        case 11: 
        console.log(`This month is:--> November`);
        break;

        case 12: 
        console.log(`This month is:--> December`);
        break;

        default:
            console.log(`Please enter valid month`);
    }
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);