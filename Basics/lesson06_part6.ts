interface motor {
    name: string;
    power: number;
    temperature: number;

}

function checkMotorstatus(motor: motor): string {
    if (motor.temperature >= 80) {
        return "OVER TEMPERATURE";
    }
else if(motor.temperature >= 70) {
    return "WARNING";
}

else {
    return "NORMAL";
  }
}

const motor1 : motor = {
    name: "motor 1",
    power: 3420,
    temperature: 78
};

const motor2: motor = {
    name: "motor 2",
    power: 2800,
    temperature: 62
};

const motor3: motor = {
    name: "motor 3",
    power: 4200,
    temperature: 85
};

console.log("Motor name:", motor1.name);
console.log("Power:", motor1.power, "W");
console.log("Temperature:", motor1.temperature, "°C");
console.log("Status:", checkMotorstatus(motor1));

console.log("...........................");

console.log("Motor name:", motor2.name);
console.log("Power:", motor2.power, "W");
console.log("Temperature:", motor2.temperature, "°C");
console.log("Status:", checkMotorstatus(motor2));

console.log("...........................");

console.log("Motor name:", motor3.name);
console.log("Power:", motor3.power, "W");
console.log("Temperature:", motor3.temperature, "°C");
console.log("Status:", checkMotorstatus(motor3));