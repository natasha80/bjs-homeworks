"use strict";

// Задача 1
class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    
    addClock(time, callback, id) {
        if (id === null || id === undefined) {
            throw new Error('Будильник без идентификатора не может быть создан');
        } else {
            if (this.alarmCollection.some((alarm) => alarm.id === id)) {
                console.error('Будильник с таким идентификатором уже создан');
            } else {
                this.alarmCollection.push({'id': id, 'time': time, 'callback': callback});
            }
        }
    }

    removeClock(id) {
        let filtred = this.alarmCollection.filter((alarm) => alarm.id !== id);
            console.log(filtred);
        if (filtred.length === this.alarmCollection.length) {
            return false;
        } else {
            this.alarmCollection = filtred;
            return true;
        }
    }
        
    getCurrentFormattedTime() {
        let date = new Date();
        let hours = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
        let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
        return `${hours}:${minutes}`;
    }

    start() {
        if (this.timerId === null) {
            this.timerId = setInterval(() => this.alarmCollection.forEach((alarm) => this.checkClock(alarm)), 1000);
        }
    }
            
    checkClock(alarm) {
        if (alarm.time === this.getCurrentFormattedTime()) {
            alarm.callback();
        }
    }
            
    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
            
    printAlarms() {
        this.alarmCollection.forEach((alarm) => console.log(`${alarm.id} заведен на ${alarm.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
                
function testCase() {
    let alarmClock = new AlarmClock();
    alarmClock.addClock('13:00', function() {
    console.log('Первый будильник!!');
    }, 8);
                
    alarmClock.addClock('13:04', function() {
    console.log('Второй будильник!!');
    alarmClock.removeClock(9);
    }, 9);
                
    alarmClock.addClock('13:07', function() {
    console.log('Третий будильник!!');
    alarmClock.clearAlarms();
    alarmClock.printAlarms();
    console.log(alarmClock);
    }, 10);
    alarmClock.start();
}
                
testCase();
