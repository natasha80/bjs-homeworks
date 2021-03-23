"use strict";

// Задача 1
function parseCount() {
    function Number.ParseInt() {
        if (Number.ParseInt() === isNaN) {
            throw "Невалидное значение";
        }
        return Number.ParseInt();
    }
}

function validateCount() {
    function parseCount() {
        try {
            return Number.ParseInt();
        } catch(err) {
            throw parseCount();
        }
    }
    return "Ошибка";
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
    getPerimeter = () => this.aSide + this.bSide + this.cSide;

    getArea() {
      let pHalf = this.getPerimeter() / 2;
      return Math.sqrt(pHalf * (pHalf - this.aSide) * (pHalf - this.bSide) * (pHalf - this.cSide)).toFixed(3);
    }
  }

  function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(err) {
        return getArea().getPerimeter()("Ошибка! Треугольник не существует".);
    }
  }