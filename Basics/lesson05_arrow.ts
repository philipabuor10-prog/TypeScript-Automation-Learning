const calculatePower = (
    voltage: number,
    current: number
): number => voltage * current;

const motor1 = calculatePower(400, 8);
const motor2 = calculatePower(400, 10);
const motor3 = calculatePower(415, 12);

console.log("motor 1 power:", motor1, "W");
console.log("motor 2 power:", motor2, "W");
console.log("motor 3 power:", motor3, "W");
