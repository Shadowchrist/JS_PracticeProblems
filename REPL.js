let digit = Math.floor(Math.random() * 10);
console.log("Digit = "+digit);

let diceValue = 1 + Math.floor(Math.random() * 10)%6;
console.log("Dice Roll = "+diceValue);

let diceValue1 = 1 + Math.floor(Math.random() * 10)%6;
let diceValue2 = 1 + Math.floor(Math.random() * 10)%6;
console.log("Sum = "+(diceValue1+diceValue2));

let randomValue1 = Math.floor(Math.random() * 100);
let randomValue2 = Math.floor(Math.random() * 100);
let sum = randomValue1 + randomValue2;
let avg = sum/2;
console.log("sum = " + sum + " average = " + avg);

let feetToInches = 12;
console.log("42 inches in feet = "+ (1/feetInInches)*42);
let feetinCM = 30.48;
let areaInMeters = ((60*feetinCM/100) * (40*feetinCM)/100);
console.log("Plot area in meters = "+areaInMeters);
let squareMeterInAcre = 0.000247;
let areaInAcres = areaInMeters * squareMeterInAcre;
console.log("Plot area in Acres = "+areaInAcres);
