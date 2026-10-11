interface Motor {
    name: string;
    power: number;
    temperature: number;
}

const motors: Motor [] = [
    {
        name: "Motor 1",
        power: 3420,
        temperature: 78,
    },
    {
        name: "Motor 2",
        power: 2800,
        temperature: 62,
    },
    {
        name: "Motor 3",
        power: 4100,
        temperature: 85,
    },
    {
        name: "Motor 4",
        power: 3600,
        temperature: 65,
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
    } else {
        normalCount++;
    }
}

const totalMotors = motors.length;

const normalPercentage = (normalCount / totalMotors) * 100;
const warningPercentage = (warningCount / totalMotors) * 100;
const overTemperaturePercentage = (overTemperatureCount / totalMotors) * 100;

const countedMotors = normalCount + warningCount + overTemperatureCount;

console.log("========= MOTOR SYSTEM REPORT =========");
console.log("Total Motors:", totalMotors);
console.log("Normal:", normalCount, `(${normalPercentage}%)`);
console.log("Warning:", warningCount, `(${warningPercentage}%)`);
console.log("Over Temperature:", overTemperatureCount, `(${overTemperaturePercentage}%)`);
console.log("Motor Counted:", countedMotors);

if (countedMotors === totalMotors) {
    console.log("VALIDATION: PASS");
} else {
    console.log("VALIDATION: FAIL");
}

console.log("===================================");