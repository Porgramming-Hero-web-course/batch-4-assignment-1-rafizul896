"use strict";
{
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            const currentYear = new Date().getFullYear();
            const gapYear = currentYear - this.year;
            console.log(`${gapYear} (assuming current year is ${currentYear})`);
        }
    }
}
