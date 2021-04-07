"use strict";

// Задача 1
function parseCount(number) {
  if (isNaN(number)) {
    throw new Error("Невалидное значение");
  } else {
    return Number.parseInt(number);
  }
}
  
function validateCount(number) {
  try {
    return parseCount(number);
  } catch(err) {
    return err;
  }
}


// Задача 2
class Triangle {
  constructor(a, b, c) {
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error("Треугольник с такими сторонами не существует");
  }
  this.aSide = a;
  this.bSide = b;
  this.cSide = c;
  }

  getPerimeter() {
  let P = this.aSide + this.bSide + this.cSide;
    return P;
  }
  
  getArea() {
  let pHalf = this.getPerimeter() / 2;
    return Number.parseFloat(Math.sqrt(pHalf * (pHalf - this.aSide) * (pHalf - this.bSide) * (pHalf - this.cSide)).toFixed(3));
    }
  }

  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch(err) {
    let triangle = {}
    triangle.getArea = () => ("Ошибка! Треугольник не существует");
    triangle.getPerimeter = () => ("Ошибка! Треугольник не существует");
      return triangle;
  }
}
