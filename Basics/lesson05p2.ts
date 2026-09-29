function displayMotor(
    motorname: string,
    temperature: number,
    current?: number,
): void {

    console.log("motorname", motorname);
console.log("temperature", temperature, "Celcius");

if (current !== undefined) {
    console.log("current", current, "Amps");
} else {
    console.log("current data unavailable");
}

}

displayMotor("motor 1", 60, 8);
displayMotor("motor 2", 70);
displayMotor("motor 3", 85, 12);