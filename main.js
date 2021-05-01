
//this function only works in a 24 hour format.
function timeCalculator (){

let hours = document.getElementById('hours').value*60
let minutes = document.getElementById('minutes').value
// let days = document.getElementById('days').value

//start time in minutes, we will use this to substract from arrival time later on.
const startTime = 480;
// formula to calculate minutes per hour and days.
const timingCalculation = hours + + minutes - startTime;

// const arrivaltTime = timingCalculation*days

console.log(timingCalculation);


document.getElementById('result').innerHTML = timingCalculation;



}



