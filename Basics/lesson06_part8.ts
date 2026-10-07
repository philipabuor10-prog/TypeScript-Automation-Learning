interface Motor {
    name: string;
    power: number;
    temperature: number;
}

function checkMotorStatus(motor: Motor): string {
    if (motor.temperature >= 80) {
        return "OVER TEMPERATURE";
    } else if (motor.temperature >= 70) {
        return "WARNING";
    } else {
        return "NORMAL";
    }
}

function displayMotorReport(motor: Motor): void {
    const status = checkMotorStatus(motor);

    console.log("=======================");
    console.log("           MOTOR MONITORING");
    console.log("=======================");
    console.log("motor:", motor.name);
    console.log("power:", motor.power, "W");
    console.log("temperature:", motor.temperature, "°C");
    console.log("status:", status);

    if (status === "OVER TEMPERATURE") {
        console.log("ALARM: Motor temperature is too high!");
    } else if (status === "WARNING") {
        console.log("WARNING: Monitor motor temperature.");
    } else {
        console.log("Motor is operating normally.");
    }

    console.log("======================");
}

const motor1: Motor = {
    name: "motor 1",
    power: 3420,
    temperature: 78
};

const motor2: Motor = {
    name: "motor 2",
    power: 2800,
    temperature: 62
};

const motor3: Motor = {
    name: "motor 3",
    power: 4200,
    temperature: 85
};

displayMotorReport(motor1);
displayMotorReport(motor2);
displayMotorReport(motor3);