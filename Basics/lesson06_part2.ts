const motor = {
    name: "Motor 1",
    power: 3420,
    temperature: 78,
    status: "WARNING",

    start: function () {
        console.log(this.name, "is starting...");
    },

    stop: function () {
        console.log(this.name, "is stopping...");
    }
};

console.log("Motor Name:", motor.name);
console.log("Power:", motor.power, "W");
console.log("Temperature:", motor.temperature, "°C");
console.log("Status:", motor.status);

motor.start();
motor.stop();