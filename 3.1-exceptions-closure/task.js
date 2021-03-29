"use strict";

// Задача 1
function parseCount() {
    function Number.parseInt() {
        if (Number.parseInt() === isNaN()) {
            throw "Невалидное значение"; 
        } else {
            return (Number.parseInt());
        }
    }
}

function validateCount() {
    try {
        return Number.parseInt();
    } catch(err) {
        throw Number.parseInt();
    }
}


// Задача 2
class Triangle {
    constructor(a, b, c) {
      if (a + b < c || a + c < b || b + c < a) {
        throw new Error("Треугольник с такими сторонами не существует!");
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
      return Math.sqrt(pHalf * (pHalf - this.aSide) * (pHalf - this.bSide) * (pHalf - this.cSide)).Number.toFixed(3);
    }
  }

  function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(err) {
        this.getArea() = ("Ошибка! Треугольник не существует".);
        this.getPerimeter() = ("Ошибка! Треугольник не существует".);
    }
  }