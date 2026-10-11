interface Motor {
    name: string;
    power: number;
    temperature: number;
}

const motors: Motor[] = [
    {
        name: "Motor 1",
        power: 4320,
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

for( const motor of motors) {
console.log("------------------------------");
console.log("Motor:", motor.name);
console.log("Temperature:", motor.temperature);
console.log("Power:", motor.power);
}

console.log("-----------------");
console.log("All Motors have been processed");