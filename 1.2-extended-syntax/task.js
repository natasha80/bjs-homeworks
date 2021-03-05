"use strict";

function getResult(a,b,c){
    let x = [];
    let D = b**2 - 4 * a * c;

    if (D == 0) {
      x.push((-b) / (2 * a));
    } else if (D > 0) {
      x.push((-b + Math.sqrt(D)) / (2 * a));
      x.push((-b - Math.sqrt(D)) / (2 * a));
    }
    return x;
    // код для задачи №1 писать здесь
}


function getAverageMark(marks){
  
    let sum = 0;

    if (marks.length === 0) {
        return 0;
    } 
    marks.splice(5);
    
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    console.log(sum);

    return sum / marks.length;
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}