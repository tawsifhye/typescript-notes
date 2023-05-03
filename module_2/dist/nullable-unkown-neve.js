"use strict";
const searchName = (value) => {
    if (value === null) {
        console.log("There's Nothing to Search");
    }
    else {
        console.log("Searching");
    }
};
// searchName('tawsif');
// searchName(null);
const getMyCarSpeed = (speed) => {
    if (typeof speed === 'number') {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(convertedSpeed);
    }
    else if (typeof speed === 'string') {
        const [value, unit] = speed.split(" ");
        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(convertedSpeed);
    }
    else {
        console.log("There is wrong type");
    }
};
getMyCarSpeed(10);
getMyCarSpeed('100 kmh^-1');
