interface Motor {
    name: string;
    power: number;
    temperature: number;
}

const motors: Motor[] = [
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
        power: 36000,
        temperature: 65,
    }
];

for (const motor of motors) {
    let status: string;

    if (motor.temperature >= 80) {
        status = "OVER TEMPERATURE";
    } else if (motor.temperature >= 70) {
        status = "WARNING";
    } else {
        status = "NORMAL";
    }

    console.log("----------------------");
    console.log("Motor:", motor.name);
    console.log("Power:", motor.power, "W");
    console.log("Temperature:", motor.temperature);
    console.log("Status:", status);
}

console.log("-------------------------");
console.log("Motor inspection completed");