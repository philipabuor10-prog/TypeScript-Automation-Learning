let motorVoltage: number = 400;
let motorCurrent: number = 8;
let  motorTemperature: number = 75;
let maximumTemperature: number = 80;
let emergencyStop: boolean = true;

let motorcanrun: boolean = (motorTemperature < 80) && (motorCurrent < 10) && (!emergencyStop);

if (motorcanrun) {
    console.log("MOTOR START");
} else {
    console.log("MOTOR STOP");
}
