"use strict";

String.prototype.isPalindrome = function isPalindrome() {
    let string = this.toLowerCase().replace(/\s/g, "").split("");
    console.log(string.join());
    console.log(string.reverse().join());
    return string === string.reverse();
}
    //String.prototype.isPalindrome - для задачи №1
    

function getAverageMark(marks) {
    let sum = 0;

    if (marks.length === 0) {
        return 0;
    }

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    const average = sum / marks.length;
    const roundedAverage = Math.round(average);

    return roundedAverage;
    // код для задачи №2 писать здесь
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}