function calculatepower (voltage: number, current: number) {
    return voltage * current;
}

let power = calculatepower(400, 10);
console.log("Power: " , power), "Watts";

function checkmotor(motorname: string, motortemperature: number, current: number) {
    if (motortemperature > 80) {
        console.log(motorname, ": FAULT");
    
} else if (motortemperature >= 60) {
    console.log(motorname, ": WARNING");
} else {
    console.log(motorname, ": NORMAL");
    
}
}

checkmotor("Motor 1", 55, 8);
checkmotor("Motor 2", 70, 8);
checkmotor("Motor 3", 85, 12);
