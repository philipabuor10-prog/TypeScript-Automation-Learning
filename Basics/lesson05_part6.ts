const calculatepower = (
    voltage: number,
    current: number
): number => {
    return voltage * current;
};

export const getmotorstatus = (
    current: number,
    temperature: number
): string => {
    if (temperature > 80) {
        return "OVERTEMPERATURE";
    }
    if (current > 10) {
        return "OVERCURRENT";
    }
    return "NORMAL";
};
export const analyzemotor = (
    voltage: number,
    current: number,
    temperature: number
) => {
    const power = calculatepower(voltage, current);

    const status = getmotorstatus(current, temperature);

    return {
        power: power,
        status: status
    };
};

export const displaymotor = (
    motorname: string,
    voltage: number,
    current: number,
    temperature: number
): void => {
    const power = calculatepower(voltage, current);
    const status = getmotorstatus(current, temperature);

    console.log(".....................................");
    console.log("MOTOR:", motorname);
    console.log("VOLTAGE:", voltage, "V");
    console.log("CURRENT:", current, "A");
    console.log("TEMPERATURE:", temperature, "℃");
    console.log("POWER:", power, "W");
    console.log("STATUS:", status);

    if (status !== "NORMAL") {
        console.log("ATTENTION:", motorname, "requires checking");
    }
};

const motors = [
    { name: "motor 1", voltage: 400, current: 8, temperature: 60 },
    { name: "motor 2", voltage: 400, current: 11, temperature: 70 },
    { name: "motor 3", voltage: 415, current: 12, temperature: 85 },
    { name: "motor 4", voltage: 380, current: 9, temperature: 82 },
    { name: "motor 5", voltage: 415, current: 7, temperature: 55 },
];

motors.forEach((motor) => {
    displaymotor(
        motor.name,
        motor.voltage,
        motor.current,
        motor.temperature
    );
});