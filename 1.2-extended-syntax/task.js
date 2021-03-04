"use strict";

function getResult(a,b,c){
    let x = [];
    let D = b**2 - 4 * a * c;

    if (D < 0) {
      return x;
    } else if (D == 0) {
      x.push((-b + Math.sqrt(D)) / (2 * a));
      return x;
    } else if (D > 0) {
      x.push((-b + Math.sqrt(D)) / (2 * a));
      x.push((-b - Math.sqrt(D)) / (2 * a));
      return x;
    }
    // код для задачи №1 писать здесь
    // return x;
}

function getAverageMark(marks){
    let marks = [];
    let sum = 0;

    if (marks.length === 0) {
        return 0;
    } else if (marks.length > 5) {
        marks.slice(0, 5);
        console.log("Вы хотите вывести больше оценок?");
    }

    for (let i = 0; i = marks.length; i++) {
        sum += marks[i];
    }
    console.log(sum);

    let getAverageMark = sum / marks.length;

    return averageMark;
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}