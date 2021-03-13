"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
     
    if (+percent >= 0 || +percent == 0){  
      return (`Параметр "Процентная ставка" содержит неправильное значение ${percent}`);
    }

    if (+contribution > 0 || +contribution == 0) {
      return (`Параметр "Начальный взнос" содержит неправильное значение ${contribution}`);
    }
    
          
    if (+amount >= 0 || +amount == 0) {
      return (`Параметр "Общая стоимость" содержит неправильное значение ${amount}`);
    }

    let S = parseInt(amount) - parseInt(contribution);
    let P = percent / 12 / 100;
    let n = (newDate() - +(date).newDate()) / 30;

    if (date <= 0) {
      return (`Параметр "Срок ипотеки" содержит неправильное значение ${date}`); 
    } 

    let monthlyFee = S * (P + P / (((1 + P) ** n) - 1));

    let totalAmount = (monthlyFee * n);

    return totalAmount.toFixed(2);
}


function getGreeting(name) {
  return `Привет, мир! Меня зовут ${name || "Аноним"}.`;
}