let motortemperature: number = 75;
let motorcurrent: number = 8;
let maximummotortemperature: number = 80;
let maximummotorCurrent: number = 10;
let emergencystop: boolean = false;

let motorcanrun: boolean = (motortemperature < 80) && (motorcurrent < 10) && (!emergencystop);


console.log("motorcanrun", motorcanrun);

let alarmactive: boolean = (motortemperature > 80) // (motorcurrent > 10);

console.log("alarmactive", alarmactive);