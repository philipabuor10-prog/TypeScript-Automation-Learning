// MOTOR 1
let motor1Temperature: number = 55;
let motor1Current: number = 8;

// MOTOR 2
let motor2Temperature: number = 70;
let motor2Current: number = 8;

// MOTOR 3
let motor3Temperature: number = 85;
let motor3Current: number = 12;


// MOTOR 1 STATUS
if (motor1Temperature > 80 || motor1Current > 10) {
    console.log("Motor 1: FAULT");
}
else if (motor1Temperature >= 60) {
    console.log("Motor 1: WARNING");
}
else {
    console.log("Motor 1: NORMAL");
}


// MOTOR 2 STATUS
if (motor2Temperature > 80 || motor2Current > 10) {
    console.log("Motor 2: FAULT");
}
else if (motor2Temperature >= 60) {
    console.log("Motor 2: WARNING");
}
else {
    console.log("Motor 2: NORMAL");
}


// MOTOR 3 STATUS
if (motor3Temperature > 80 || motor3Current > 10) {
    console.log("Motor 3: FAULT");
}
else if (motor3Temperature >= 60) {
    console.log("Motor 3: WARNING");
}
else {
    console.log("Motor 3: NORMAL");
}