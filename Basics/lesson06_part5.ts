export {};

interface Motor {
    name: string;
    power: number;
    temperature: number;
    status: string;
}

function displayMotor(motor: Motor): void {
    console.log("----- MOTOR -----");
    console.log("Name:", motor.name);
    console.log("Power:", motor.power, "W");
    console.log("Temperature:", motor.temperature, "°C");
    console.log("Status:", motor.status);
}

const motor1: Motor = {
    name: "Motor 1",
    power: 3420,
    temperature: 78,
    status: "WARNING"
};

const motor2: Motor = {
    name: "Motor 2",
    power: 2800,
    temperature: 62,
    status: "RUNNING"
};

const motor3: Motor = {
    name: "Motor 3",
    power: 4200,
    temperature: 85,
    status: "OVER TEMPERATURE"
};

const motor4: Motor = {
    name: "Motor 4",
    power: 3600,
    temperature: 65,
    status: "RUNNING"
};

displayMotor(motor1);
displayMotor(motor2);
displayMotor(motor3);
displayMotor(motor4);