const calculatepower = (
    voltage: number,
    current: number
): number => voltage * current;


const displaymotor = (
    motorname: string,
    voltage: number,
    current: number
): void => {


    const power =calculatepower(voltage, current);
    console.log(".................................");
    console.log("motor", motorname);
    console.log("voltage", voltage, "V");
    console.log("current", current, "A");
    console.log("power", power, "W");
};

displaymotor("motor 1", 400, 8);
displaymotor("motor 2", 400, 8);
displaymotor("motor 3", 415, 12);
