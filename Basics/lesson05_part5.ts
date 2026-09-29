const calculatepower = (
    voltage: number,
    current: number
): nmber => {
    return voltage * current;
};

const getmotorstatus = (
    current: number, 
    temperature: number
): string => {
    if(temperature > 80) {
        return "OVER TEMPERATURE"
    }
    if(current > 10) {
        return "OVERCURRENT"
    }
    return "NORMAL"
};

const motor1power = calculatepower(400, 8);
const motor1status = getmotorstatus(8, 60);

console.log("motor 1 power", motor1power, "W");
console.log("motor 1 status", motor1status);

const motor2power = calculatepower(400, 11);
const motor2status = getmotorstatus(11, 70);

console.log("motor 2 power", motor2power, "W");
console.log("motor 2 status", motor2status);

const motor3power = calculatepower(415, 12);
const motor3status = getmotorstatus(12, 85);

console.log("motor 3 power", motor3power, "W");
console.log("motor 3 status", motor3status);
