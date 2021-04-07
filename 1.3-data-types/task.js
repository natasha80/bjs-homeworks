"use strict";

// Задача 1
function calculateTotalMortgage(percent, contribution, amount, date) {
  if (isNaN(percent) || percent <= 0) {
  return `Параметр "Процентная ставка" содержит неправильное значение ${percent}.`;
  }// Проверяем на корректность
  
  if (isNaN(contribution) || contribution > amount) {
  return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}.`;
  }// Проверяем на корректность
  
  if (isNaN(amount) || amount < contribution) {
  return `Параметр "Общая стоимость" содержит неправильное значение ${amount}.`;
  }// Проверяем на корректность
  //S - сумма кредита, P - 1/12 процентной ставки, n - кол-во месяцев ^-возведение в степень
  let S = parseInt(amount) - parseInt(contribution);//Сумма которую нужно вернуть банку(Сумма кредита - первый взнос)
  let P = percent / 100 / 12;//Проценты
  let yearsDiff = date.getFullYear() - new Date().getFullYear();
  let n = date.getMonth() - new Date().getMonth() + yearsDiff * 12;//Кол-во месяцев ипотеки

  let monthlyFee = S * (P + P / (((1 + P) ** n) - 1));//Ежемесячный платеж
  let totalAmount = (monthlyFee * n);//Сумма которую должен заплатить клиент
  let result = Math.round(totalAmount * 100) / 100;

  console.log(result);
  return result;
}


// Задача 2
function getGreeting(name) {
  return `Привет, мир! Меня зовут ${name || "Аноним"}.`;
}


