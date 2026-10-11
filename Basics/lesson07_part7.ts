interface Motor {
    name: string;
    power: number;
    temperature: number;
}

function checkMotorStatus(motor: Motor): string {

    if (motor.temperature >= 80) {
        return "OVER TEMPERATURE";
    }
    else if (motor.temperature >= 70) {
        return "WARNING";
    }
    else {
        return "NORMAL";
    }
}

const testMotors: Motor[] = [
    {name: "Test 1", power: 1000, temperature: 69},
    {name: "Test 2", power: 1000, temperature: 70},
    {name: "Test 3", power: 1000, temperature: 79},
    {name: "Test 4", power: 1000, temperature: 80},
    {name: "Test 5", power: 1000, temperature: 81},
];
for (const motor of testMotors) {
    console.log(
        motor.name,
        " Temperature:", motor.temperature,
        " status:", checkMotorStatus(motor)
    );
}

const expectedStatuses: string[] = [
    "NORMAL",
    "WARNING",
    "WARNING",
    "OVER TEMPERATURE",
    "OVER TEMPERATURE"
];

let passedTest = 0;
let failedTest = 0;

for (let i = 0; i < testMotors.length; i++) {
    const actualStatus = checkMotorStatus(testMotors[i]);
    const expectedStatus = expectedStatuses[i];

    if (actualStatus === expectedStatus) {
        console.log(testMotors[i].name, "PASS");
        passedTest++;
    } else {
        console.log(
            testMotors[i].name,
            "FAIL",
            "Expected:", expectedStatus,
            "Actual:", actualStatus
        );

        failedTest++;
    }
}

console.log("-----------------------");
console.log("Test Passed:", passedTest);
console.log("Test Failed:", failedTest);

if (failedTest === 0) {
    console.log("VALIDATION PASS");
} else {
    console.log("VALIDATION FAIL");
}