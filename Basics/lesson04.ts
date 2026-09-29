let motortemperature: number = 75;
let motorMaximumTemperature: number =  80;

if (motortemperature < motorMaximumTemperature) {
    console.log("motor temperature is SAFE");
    console.log("motor can run");
} else {
    console.log("motor temperature is HIGH");
    console.log("motor must STOP");
}

