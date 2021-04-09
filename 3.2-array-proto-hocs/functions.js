"use strict";

console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

// Задача 1
function getNames() {
    return weapons.map((weapon) => weapon.name);
}
    
function getCountReliableWeapons(durability) {
    return weapons.filter((weapon) => weapon.durability > durability).length;
}
    
function hasReliableWeapons(durability) {
    return weapons.some((weapon) => weapon.durability > durability);
}
    
function getReliableWeaponsNames(durability) {
    return weapons.filter((weapon) => weapon.durability > durability).map((weapon) => weapon.name);
}
    
function getTotalDamage() {
    let sum = 0;
    weapons.forEach((weapon) => sum += weapon.attack);
    return sum;
}

function getValuestCountToSumValues(arr, total) {
    let sum = 0;
    let counter = 0;
    arr.forEach((number) => {
    if (sum >= total) {
        return counter;
    }
    sum += number
    counter++;
    });
        
    return counter;
}

        
// Задача 2
function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}
    
function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    console.log(args);
    return args.reduce((sum, arg) => {
    return sum += arg;
    }, 0);
}
    
function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length &&arr1.every((value, index) => value === arr2[index]);
}

function memorize(fn, limit) {
    let memory = [];
        
    function callback(...args) {
        let memoryCell = memory.find((cell) => compareArrays(cell.args, args));
        if (memoryCell) {
            return memoryCell.result;
        } else {
        if (memory.length === limit) {
        memory = memory.slice(1, memory.length);
        }
        let result = fn(...args);
        memory.push({'args': args, 'result': result});
            return result;
        }
    }
    return callback;
}