"use strict";

class Product {
  /**
   *
   * @param {'string'} name
   * @param {'number'} price
   * @param {'string'} currency
   * @param {'number'} amount
   */
  constructor(name, price, currency, amount) {
    if (typeof name !== "string") {
      throw new TypeError("name must be a string");
    }
    if (typeof currency !== "string") {
      throw new TypeError("currency must be a string");
    }
    if (typeof price !== "number") {
      throw new TypeError("price must be a number");
    }
    if (typeof amount !== "number") {
      throw new TypeError("amount must be a number");
    }

    this.name = name;
    this.price = price;
    this.currency = currency;
    this.amount = amount;
  }
  get showInfo() {
    return `name:${this.name}  price:${this.price} currency:${this.currency} amount: ${this.amount}`;
  }
  buy(num) {
    return num * this.price;
  }
}

class PhysProduct extends Product {
  /**
   *
   * @param {'string'} name
   * @param {'number'} price
   * @param {'string'} currency
   * @param {'number'} amount
   * @param {'number'} weight
   */
  constructor(name, price, currency, amount, weight) {
    if (typeof name !== "string") {
      throw new TypeError("name must be a string");
    }
    if (typeof currency !== "string") {
      throw new TypeError("currency must be a string");
    }
    if (typeof price !== "number") {
      throw new TypeError("price must be a number");
    }
    if (typeof amount !== "number") {
      throw new TypeError("amount must be a number");
    }
    if (typeof weight !== "number") {
      throw new TypeError("weight must be a number");
    }
    super(name, price, currency, amount);
    this.weight = weight;
  }
  get showInfo() {
    return `name:${this.name}  price:${this.price} currency:${this.currency} amount: ${this.amount} weight:${this.weight}`;
  }
}

class VirtualProduct extends Product {
  /**
   *
   * @param {'string'} name
   * @param {'number'} price
   * @param {'string'} currency
   * @param {'number'} amount
   * @param {'number'} memorySize
   */
  constructor(name, price, currency, amount, memorySize) {
    if (typeof name !== "string") {
      throw new TypeError("name must be a string");
    }
    if (typeof currency !== "string") {
      throw new TypeError("currency must be a string");
    }
    if (typeof price !== "number") {
      throw new TypeError("price must be a number");
    }
    if (typeof amount !== "number") {
      throw new TypeError("amount must be a number");
    }
    if (typeof memorySize !== "number") {
      throw new TypeError("memorySize must be a number");
    }
    super(name, price, currency, amount);
    this.memorySize = memorySize;
  }
  get showInfo() {
    return `name:${this.name}  price:${this.price} currency:${this.currency} amount: ${this.amount} memorySize:${this.memorySize}`;
  }
}

const telephone = new PhysProduct("OppoA72", 4500, "$", 12, 300);
const computer = new VirtualProduct("Asus", 24000, "$", 1, 24);
try {
  const telephone = new PhysProduct("OppoA72", 4500, "$", 12, 300);
  const computer = new VirtualProduct("Asus", 24000, "$", 1, 24);
  console.log(telephone.showInfo);
  console.log(computer.showInfo);
  console.log(computer.buy(3));
} catch (error) {
  console.log();
}
