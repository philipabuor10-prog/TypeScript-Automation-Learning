import {displaymotor} from "./lesson05_part6"
import {getmotorstatus} from "./lesson05_part6"
import {analyzemotor} from "./lesson05_part6"
const motors = [
    {name: "motor 1", voltage: 400, current: 8, temperature: 60},
    {name: "motor 2", voltage: 400, current: 11, temperature: 70},
    {name: "motor 3", voltage: 415, current: 12, temperature: 85},
    {name: "motor 4", voltage: 380, current: 9, temperature: 82},
    {name: "motor 5", voltage: 415, current: 7, temperature: 55},
];
motors.forEach((motor) => {
displaymotor(
        motor.name,
        motor.voltage, 
        motor.current,
        motor.temperature
    );
});

motors.forEach((motor)=> {
    const status = getmotorstatus(
        motor.current,
        motor.temperature
    );
    if (status !== "NORMAL") {
        console.log(
            "ATTENTION:",
            motor.name,
            "requires checking,"
        );
    }
});