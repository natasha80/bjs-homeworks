"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    let S = 50000 - 0;
    let P = 10 / 100 / 12;
    let n = 12;

    let monthlyFee = S * (P + P / (((1 + P) ** n) - 1));

    let totalAmount = 0 + (monthlyFee * n);

    console.log(totalAmount.toFixed(2));
    // код для задачи №1 писать здесь
    return totalAmount;
}


function getGreeting(name) {
    if (name === undefined || name === null || name === "") {
        console.log ("Привет, мир! Меня зовут Аноним");
        return "Привет, мир! Меня зовут Аноним";
    } else {
        console.log (`Привет, мир! Меня зовут ${name}`);
        return `Привет, мир! Меня зовут ${name}`;
    }
    // код для задачи №2 писать здесь
    return greeting;
}