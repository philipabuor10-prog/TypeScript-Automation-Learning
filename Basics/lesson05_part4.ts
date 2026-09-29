const checkmotor = (
    motorname: string,
voltage: number, 
current: number, 
temperature: number, 
): void => {
    const power = voltage * current;

    console.log(".........................");
    console.log("motor", motorname);
    console.log("voltage", voltage, "V");
    console.log("current", current, "A");
    console.log("temperature", temperature, "℃");
    console.log("power", power, "W");

    if(temperature > 80) {
        console.log("STATUS: OVERTEMPERATURE");
    } else if(current > 10) {
            console.log("STATUS: overcurrent");
    }else {
        console.log("STATUS: normal");
    }
}

checkmotor("motor 1", 400, 8, 60);
checkmotor("motor 2",400, 11, 70 );
checkmotor("motor 3", 415, 12, 85);