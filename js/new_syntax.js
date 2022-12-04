"use strict";

class UserClasses {
  /**
   *
   * @param {string} fname
   * @param {string} lname
   * @param {number} age
   */
  constructor(fname, lname, age, isBan = false) {
    if (typeof fname !== "string") {
      throw new TypeError("fname must be a string");
    }
    if (typeof lname !== "string") {
      throw new TypeError("lname must be a string");
    }

    this.fname = fname;
    this._lname = lname;
      this.age = age;
      this.isBan = isBan
  }
  get age() {
    return this._age;
  }
  set age(age) {
if (typeof age !== "number") {
  throw new TypeError("age must be a number");
}
if (age < 0 || age > 150) {
  throw new RangeError("age must 0...150");
}
this._age = age;
  }
  get getFullName() {
    return `${this.fname}${this._lname}`;
  }

  get isAdult() {
    return this._age >= ADULT_AGE;
    }
    static isUserClasses(value) {
        return value instanceof UserClasses
    }
    static getInstance(){}
}
try {
  const person3 = new UserClasses("Tim", "Rot", 58);
  console.log(person3.getFullName);
  console.log(person3.isAdult);
} catch (error) {
  console.log(error);
}

