import { faker } from "@faker-js/faker";

import { calculateBMI, getBMIState, getBMIStateByAge } from "./BMI";

describe("calculateBMI", () => {
  it("calculates the correct BMI", () => {
    const people = Array(10)
      .fill(0)
      .map(() => ({
        weight: faker.number.float({ min: 50, max: 100 }),
        height: faker.number.int({ min: 120, max: 200 }),
      }));

    for (const { weight, height } of people) {
      expect(calculateBMI(weight, height).toFixed(3)).toBe(
        ((10000 * weight) / height ** 2).toFixed(3)
      );
    }
  });
});

describe("getBMIState", () => {
  it("gets the correct BMI state", () => {
    const BMIs = Array(100)
      .fill(0)
      .map(() => faker.number.float({ min: 16, max: 32 }));

    for (const BMI of BMIs) {
      expect(getBMIState(BMI)).toBe(
        BMI < 18.5
          ? "underweight"
          : BMI < 24.9
          ? "healthy"
          : BMI < 29.9
          ? "overweight"
          : "obese"
      );
    }
  });
});

describe("getBMIStateByAge", () => {
  it("calculates the correct BMI based on age", () => {
    const people = Array(100)
      .fill(0)
      .map(() => ({
        BMI: faker.number.float({ min: 16, max: 32 }),
        age: faker.number.int({ min: 19, max: 100 }),
      }));

    const ageRanges = [
      { minAge: 19, maxAge: 24, min: 19, max: 24 },
      { minAge: 25, maxAge: 34, min: 20, max: 25 },
      { minAge: 35, maxAge: 44, min: 21, max: 26 },
      { minAge: 45, maxAge: 54, min: 22, max: 27 },
      { minAge: 55, maxAge: 64, min: 23, max: 28 },
      { minAge: 65, maxAge: Infinity, min: 24, max: 29 },
    ];

    for (const { BMI, age } of people) {
      const healthyRange = ageRanges.find(
        ({ minAge, maxAge }) => age >= minAge && age <= maxAge
      );

      expect(getBMIStateByAge(BMI, age)).toBe(
        BMI < healthyRange!.min || BMI > healthyRange!.max
          ? "not healthy"
          : "healthy"
      );
    }
  });
});
