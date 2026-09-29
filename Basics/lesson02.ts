let motorVoltage: number = 400;
let motorCurrent: number = 10;
let motorPower: number = motorVoltage * motorCurrent;

console.log("motorPower:",motorPower ,"W");

let maximumTemperature: number = 80;
let motorTemperature: number = 85;
let alarmActive: boolean = motorTemperature > maximumTemperature;

console.log("alarmActive:", alarmActive);
console.log("motorTemperature:", motorTemperature, "℃");
console.log("maximumTemperature:", maximumTemperature, "℃");