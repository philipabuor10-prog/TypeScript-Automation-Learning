interface Motor {
    name: string;
    power: number;
    temperature: number;
}

const motors: Motor [] = [
    {
     name: "Motor 1",
    power: 3420,
    temperature: 78
    },
    {
     name: "Motor 2",
    power: 2800,
    temperature: 62
    },
    {
     name: "Motor 3",
    power: 4100,
    temperature: 85
    },
    {
     name: "Motor 4",
    power: 3600,
    temperature: 65
    }
];

let normalCount = 0;
let warningCount = 0;
let overTemperatureCount = 0;

for (const motor of motors) {
    if (motor.temperature >= 80) {
        overTemperatureCount++;
    } else if (motor.temperature >= 70) {
        warningCount++;
    }
    else {
        normalCount++;
    }
}

console.log("=========MOTOR SYSTEM SUMMARY===========");
console.log("Total Motors:", motors.length);
console.log("Normal Motors:", normalCount);
console.log("Warning Motors:", warningCount);
console.log("Over-Temperature Motors:", overTemperatureCount);
