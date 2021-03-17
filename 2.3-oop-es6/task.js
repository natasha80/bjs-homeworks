"use strict";

// Задача 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.state = 100;
      this.type = null;
      this.releaseDate = releaseDate;
      this.name = name;
      this.pagesCount = pagesCount;
    }

    fix() {
      this.state = this.state * 1.5;
      return this._state;
    }

    set state (number) {
      const state = number;

      if (this.state < 0) {
        this.state = 0;
      } else if (this.state > 100) {
        this.state = 100;
      } else {
        this._state = state;
      }
    }

    get state () {
      return this._state;
    }
      
}
const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100


class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine"; 
    }
  
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, author);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, author);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, author);
        this.type = "detective";
    }
}
const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15



// Задача 2
class Library {
    constructor(name, books) {
        this.name = "";
        this.books = [];
    }
}

addBook(book) {
    for(let i = 0; i < this.books.length; i++) {
        if (this.state > 30)
        return this.books[i];
  }
  return books;
}

findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
        if (this.books[i][type] === value);
        return this.books[i];
    }
    return null;
}

giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].name === bookName);
        return this.books.splice(i, 1);
    }
    return null;
}

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3