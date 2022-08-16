"use strickt"
const car = {
    make: "Toyota Motor Corporation",
    model: "RAV4",
    yearOfManufacture: 2020,
    averageSpeed: 150,
    fuelTankVolume: 50,
    averageFuelConsumption: 6.8,

}
console.log(Object.getOwnPropertyNames(car));

car.driver = 'Dmitriy'
console.log(car['driver'])

console.log('driver' in car)

const standardConsumtion = 100;


document.querySelector('.calc').onclick =  showCarInfo;

function showCarInfo() {
    const distance = document.querySelector('.input').value
    // const fuelCount = (distance * car.averageFuelConsumption) / standardConsumtion;
    console.log(distance);
    console.log(car);
    document.querySelector('.out__time').innerHTML = findTimeOfTrip(distance, car);
    document.querySelector('.out__fuel').innerHTML = findFuelConsumtion(distance, car);

}
function findFuelConsumtion(distance, car) {
    return (distance * car.averageFuelConsumption) / standardConsumtion;

}

function findTimeOfTrip(distance, car) {
    const timeWithoutRest = Math.round(Number(distance / car.averageSpeed));
    console.log(timeWithoutRest)
    const countOfRestings = findCountOfRestings(timeWithoutRest);
    console.log(countOfRestings);
    return timeWithoutRest + countOfRestings;
}


function findCountOfRestings(timeWithoutRest) {
    const periodBetweenRestings = 4;
    return Math.floor(timeWithoutRest / periodBetweenRestings);
}

//встановлення часу

let day = new Date();
document.querySelector('.time__display').innerHTML = day;

let changedMinutes = 3;
let changedSeconds = 3;
let changedHours = 3;

document.querySelector('.change__seconds').onclick = () => {
    getTimeWithChangedSeconds();
    document.querySelector('.time__display').innerHTML = day;

}


function getTimeWithChangedSeconds(day) {
    day.getSeconds(changedHours);
}

document.querySelector('.change__minutes').onclick = () => {
    getTimeWithChangedMinutes(day);
    document.querySelector('.time__display').innerHTML = day;

}

function getTimeWithChangedMinutes(day) {
    day.getMinutes(changedMinutes);
}

document.querySelector('.change__hours').onclick = () => {
    getTimeWithChangedHours(day);
    document.querySelector('.time__display').innerHTML = day;

}

function getTimeWithChangedHours(day) {
    day.getHours(changedMinutes);
}

