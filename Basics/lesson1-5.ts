function calculatepower(voltage: number, current: number): number {
    return voltage * current;
}

function  checkmotor(
    motorname: string,
    voltage: number,
    current: number,
    temperature: number,
): void {

    let power = calculatepower(voltage, current);

    console.log("........................");
    console.log("Motor:", motorname);
    console.log("voltage:", voltage, "Volts");
    console.log("current:", current, "Amps");
    console.log("power:", power, "Watts");
    console.log("temperature:", temperature, "Celsius");

    if (temperature > 80) {
        console.log("STATUS: OVER TEMPERATURE");
    } else if (current > 10) {
        console.log("STATUS: OVERCURRENT");
    } else {
        console.log("STATUS: NORMAL");
    }
}

checkmotor("motor 1", 400, 8, 60);
checkmotor("motor 2", 400,11, 70);
checkmotor("motor 3", 415, 1, 85);
checkmotor("motor 4", 380, 9, 78);