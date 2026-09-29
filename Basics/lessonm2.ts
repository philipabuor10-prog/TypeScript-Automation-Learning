let motorTemperature: number = 60;

if (motorTemperature < 60) {
    console.log("MOTOR STATUS: NORMAL");
} else if (motorTemperature <= 75) {
    console.log("MOTOR STATUS: WARNING");
} else {
    console.log("MOTOR STATUS: OVER TEMPERATURE");
}
