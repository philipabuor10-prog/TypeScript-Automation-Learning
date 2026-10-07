export {};

interface Motor {
    name: string;
    power: number;
    temperature: number;
    status: string;

}

const motor1: Motor = {
    name: "motor 1",
    power: 3420,
    temperature: 78,
    status: "WARNING"
};

console.log("Motor name:", motor1.name);
console.log("Power:", motor1.power, "W");
console.log("Temperature:", motor1.temperature, "°C");
console.log("Status:", motor1.status);