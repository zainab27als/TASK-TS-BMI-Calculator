"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateBMI = calculateBMI;
exports.getBMIState = getBMIState;
exports.getBMIStateByAge = getBMIStateByAge;
/**
 * Calculate BMI
 * - Accepts weight in KG as a parameter (type number)
 * - Accepts height in CM as a parameter (type number)
 * - returns the calculated BMI (type number)
 * - The equation for BMI is (weight (kg) / height^2(m)).
 */
function calculateBMI(weight, height) {
    // Write your code here 👇🏼
    var BMI = (weight / (height / 100)) * (height / 100);
    // Stop making changes here!
    return BMI;
}
function getBMIState(BMI) {
    // Don't change this variable
    var BMIState = "obese";
    // Write your code here 👇🏼
    if (BMI < 18.5) {
        BMIState = "underweight";
    }
    else if (BMI >= 18.5 && BMI < 25.0) {
        BMIState = "healthy";
    }
    else if (BMI >= 25.0 && BMI < 30.0) {
        BMIState = "overweight";
    }
    // Stop making changes here!
    return BMIState;
}
function getBMIStateByAge(BMI, age) {
    // Don't change this variable
    var BMIState = "not healthy";
    // Write your code here 👇🏼
    if (age >= 19 && age <= 24) {
        if (BMI >= 19 && BMI <= 24) {
            BMIState = "healthy";
        }
    }
    else if (age >= 25 && age <= 34) {
        if (BMI >= 20 && BMI <= 25) {
            BMIState = "healthy";
        }
    }
    else if (age >= 35 && age <= 44) {
        if (BMI >= 21 && BMI <= 26) {
            BMIState = "healthy";
        }
    }
    else if (age >= 45 && age <= 54) {
        if (BMI >= 22 && BMI <= 27) {
            BMIState = "healthy";
        }
    }
    else if (age >= 55 && age <= 64) {
        if (BMI >= 23 && BMI <= 28) {
            BMIState = "healthy";
        }
    }
    else if (age >= 65) {
        if (BMI >= 20 && BMI <= 25) {
            BMIState = "healthy";
        }
    }
    // Stop making changes here!
    return BMIState;
}
