"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
     
    if (percent >= 0) {  
      percent = +percent;
    } else if (percent != 0 || percent == 0) {
      return (`Параметр "Процентная ставка" содержит неправильное значение ${percent}`);
    }
    if (contribution > 0) {  
      сontribution = +contribution;
    } else if (contribution != 0) {
      return (`Параметр "Начальный взнос" содержит неправильное значение ${contribution}`); 
    }
          
    if (amount >= 0) {  
      amount = +amount;
    } else if (amount !=  0) {
      return (`Параметр "Общая стоимость" содержит неправильное значение ${amount}`); 
    }

    if (date >= date) {
      return (`Параметр "Срок ипотеки" содержит неправильное значение ${date}`); 
    } 

    let S =  amount - contribution;
    let P = percent / 100 / 12;
    let n = 12;

    let monthlyFee = S * (P + P / (((1 + P) ** n) - 1));

    let totalAmount = 0 + (monthlyFee * n);

    console.log(totalAmount.toFixed(2));
    return totalAmount.toFixed(2);
}


function getGreeting(name) {
    let greeting = "";
    if (name === undefined || name === null || name === "") {
        greeting = (`Привет, мир! Меня зовут Аноним`);
        console.log(greeting);
        return greeting;
    } else {
        greeting = (`Привет, мир! Меня зовут ${name}`);
        console.log(greeting); 
        return greeting;
    }
    // код для задачи №2 писать здесь
    // return greeting;
}