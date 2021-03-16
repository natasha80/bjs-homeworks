"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
     
    if (+percent <= isNaN(percent) || typeof +percent === "undefined") { 
      console.log(percent ) ;
      return (`Параметр "Процентная ставка" содержит неправильное значение ${percent}`);
    }

    if (+contribution < contribution || typeof +contribution === "undefined") {
      return (`Параметр "Начальный взнос" содержит неправильное значение ${contribution}`);
    }
    
    if (+amount <= isNaN(amount) || typeof +amount === "undefined") {
      return (`Параметр "Общая стоимость" содержит неправильное значение ${amount}`);
    }

    let S = parseInt(amount) - parseInt(contribution);
    let P = percent / 100 / 12;
    let day = new Date().getFullYear;
    let n = new Date().getFullYear() / 30;

    if (date <= isNaN(date)) {
      return (`Параметр "Срок ипотеки" содержит неправильное значение ${date}`); 
    } 

    let monthlyFee = S * (P + P / (((1 + P) ** n) - 1));

    let totalAmount = (monthlyFee * n);

    console.log(date);
    return totalAmount.toFixed(2);
    
}


function getGreeting(name) {
  return `Привет, мир! Меня зовут ${name || "Аноним"}.`;
}