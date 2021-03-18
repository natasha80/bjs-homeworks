"use strict";

// Задача 1
function getSolutions(a, b, c) {
    let D = b**2 - 4*a*c;
    if (D < 0) {
        return {D: D, roots: []};
        } else if (D === 0) {
           let x1 = -b / 2*a;
           return {D: D, roots: [x1]};
            } else (D > 0) 
                let x1 = (-b + Math.sqrt(D)) / 2*a;
                let x2 = (-b - Math.sqrt(D)) / 2*a;
                return {D: D, roots: [x1, x2]};
            } 
            
getSolutions(1, 2, 3);


function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D === undefined) {
        console.log("Уравнение не имеет вещественных корней");
    } else if (result.D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}
showSolutionsMessage(7, 20, -3);
    

// Задача 2
function getAverageScore(data) {
    let averageScore = {};

    for (let key in data) {
       averageScore[key] = getAverageMark(data[key]);
    }

    averageScore.average = Object.values(averageScore);
    
    return averageScore;
}


function  getAverageMark(marks) {
    let sum = 0;

    if (marks.length === 0) {
        return 0;
    }

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    Object.values(sum);
    return sum / marks.length;
}
