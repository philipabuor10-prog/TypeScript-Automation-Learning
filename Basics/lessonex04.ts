let motorTemperature: number = 75;
let motorCurrent: number = 8;
let emergencyStop: boolean = false;

let motorcanrun: boolean = (motorTemperature < 80) && (motorCurrent < 10 ) && (!emergencyStop);

if (motorcanrun) {
    console.log("MOTOR START");
} else {
    console.log("MOTOR STOP");
}