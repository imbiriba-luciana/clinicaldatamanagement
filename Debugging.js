console.log(`Debugging: Buying flight tickets`)

const listCities = new Array(
    `Belém`,
    `São Paulo`,
    `Salvador`
);

const majority = 18;
const accompanied = false;
const destinyCity = `São Paulo`;

const allowenceToBuy = majority >= 18 || accompanied == true;

let counter = 0;
let cityExists = false;

while (counter < 3) {

    if (listCities[counter] == destinyCity) { 
        cityExists = true;
        break;
    }

    counter += 1;
}

console.log("Final destination: ", destinyCity);