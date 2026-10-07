export {};

interface Motor {
    name: string;
    power: number;
    temperature: number;
    status: string;
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
    power: 4100,
    temperature: 85,
    status: "OVER TEMPERATURE"
};

const motor4: Motor = {
    name: "Motor 4",
    power: 3600,
    temperature: 65,
    status: "RUNNING"
};

console.log("----- MOTOR 1 -----");
console.log("Name:", motor1.name);
console.log("Power:", motor1.power, "W");
console.log("Temperature:", motor1.temperature, "°C");
console.log("Status:", motor1.status);

console.log("----- MOTOR 2 -----");
console.log("Name:", motor2.name);
console.log("Power:", motor2.power, "W");
console.log("Temperature:", motor2.temperature, "°C");
console.log("Status:", motor2.status);

console.log("----- MOTOR 3 -----");
console.log("Name:", motor3.name);
console.log("Power:", motor3.power, "W");
console.log("Temperature:", motor3.temperature, "°C");
console.log("Status:", motor3.status);

console.log("----- MOTOR 4 -----");
console.log("Name:", motor4.name);
console.log("Power:", motor4.power, "W");
console.log("Temperature:", motor4.temperature, "°C");
console.log("Status:", motor4.status);