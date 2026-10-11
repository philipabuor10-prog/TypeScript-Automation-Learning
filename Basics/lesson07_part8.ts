interface Motor {
    name: string;
    power: number;
    temperature: number;
}

// Store all monitored motors
const monitoredMotors: Motor[] = [
    { name: "Motor 1", power: 3420, temperature: 78 },
    { name: "Motor 2", power: 2800, temperature: 62 },
    { name: "Motor 3", power: 4100, temperature: 85 },
    { name: "Motor 4", power: 3600, temperature: 65 },
    { name: "Motor 5", power: 2500, temperature: 72 }
];

// Classify each motor automatically
function checkMotorStatus(motor: Motor): string {
    if (motor.temperature >= 80) {
        return "OVER TEMPERATURE";
    } else if (motor.temperature >= 70) {
        return "WARNING";
    } else {
        return "NORMAL";
    }
}

// Initialize Status Counters
let normalCount = 0;
let warningCount = 0;
let overTemperatureCount = 0;

console.log("=====================================");
console.log("             MOTOR MONITORING REPORT");
console.log("======================================");

// Inspect and classify every motor
for (const motor of monitoredMotors) {
    const status = checkMotorStatus(motor);

    if (status === "NORMAL") {
        normalCount++;
    } else if (status === "WARNING") {
        warningCount++;
    } else {
        overTemperatureCount++;
    }

    console.log("------------------------------");
    console.log("Motor:", motor.name);
    console.log("Power:", motor.power);
    console.log("Temperature:", motor.temperature);
    console.log("Status:", status);
}

// Calculate system statistics
const totalMotors = monitoredMotors.length;

const normalPercentage = (normalCount / totalMotors) * 100;
const warningPercentage = (warningCount / totalMotors) * 100;
const overTemperaturePercentage = (overTemperatureCount / totalMotors) * 100;

const countedMotors = normalCount + warningCount + overTemperatureCount;

// Print Summary
console.log("\n===================SYSTEM SUMMARY===================");
console.log("Total Motors:", totalMotors);
console.log("Normal:", normalCount, "-", normalPercentage.toFixed(1) + "%");
console.log("Warning:", warningCount, "-", warningPercentage.toFixed(1) + "%");
console.log("Over Temperature:", overTemperatureCount, "-", overTemperaturePercentage.toFixed(1) + "%");
console.log("Counted Motors:", countedMotors);

// Validate results
console.log("==================================");

if (countedMotors === totalMotors) {
    console.log("COUNT VALIDATION: PASS");
} else {
    console.log("COUNT VALIDATION: FAIL");
}

// Assess the overall system
if (overTemperatureCount > 0) {
    console.log("SYSTEM ALERT: Immediate inspection required.");
} else if (warningCount > 0) {
    console.log("SYSTEM NOTICE: Monitor warning motors.");
} else {
    console.log("SYSTEM STATUS: All Motors are normal");
}

console.log("==========================================");
console.log("Monitoring report completed.");