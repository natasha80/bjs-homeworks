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
      return this.state *= 1.5;
    }

    set state (number) {
      const state = number;

      if (number < 0) {
        this._state = 0;
      } else if (number > 100) {
        this._state = 100;
      } else {
        this._state = number;
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
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
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
class Library {//библиотека(название, книги)
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
  addBook(book) {//добавить книгу(книга)
    if (book.state > 30) {
      this.books.push(book);
    }//состояние библиотеки
  }
  
  findBookBy(type, value) {//найти книгу по(тип, значение)
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) {
        return this.books[i];
      }
    }
    return null;
  }

  giveBookByName(bookName) {//выдать книгу по названию(название книги)
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        return this.books.splice(i, 1)[0];
      }
    }
    return null;
  }
}


const library = new Library("Библиотека имени Ленина");//Создали библиотеку
console.log(library);

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
const collection = new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
console.log(collection.type);//добавили издание по типу

library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
const outing = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);
console.log(outing.type);//добавили издание по типу

library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
const car = new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138);
console.log(car.type);//добавили издание по типу

library.addBook(new Magazine("Мурзилка", 1924, 60));
const journal = new Magazine("Мурзилка", 1924, 60);
console.log(journal.type);//добавили издание по типу

library.findBookBy(new NovelBook(1919));
const year = new NovelBook(1919);
console.log(year.releaseDate);//искали книгу, изданную в 1919г.

library.addBook(new NovelBook("Алексей Толстой", "Граф Калиостро", 1919, 510));
const graph = new NovelBook("Алексей Толстой", "Граф Калиостро", 1919, 510);
console.log(graph.releaseDate);//создали книгу 1919г.

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924)); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4

library.giveBookByName(new Library("Машина времени"));
const booksBeforeIssuance = new Library("Машина времени");
console.log(booksBeforeIssuance);

library.giveBookByName(new Library("Машина времени"));
const findBook = new Library("Машина времени");
console.log(findBook.book);//выдали книгу

library.giveBookByName(new Library("releaseDate", 1924));
const spoiledBook = new Library("releaseDate", 1924);
console.log(spoiledBook.book);//испортили книгу

library.giveBookByName(new Library("Машина времени"));
const correctedBook = new Library("Машина времени");
console.log(correctedBook.book);//исправили книгу

library.giveBookByName(new Library("Машина времени"));
const addedBook = new Library("Машина времени");
console.log(addedBook.book);//добавляем починенную книгу обратно в библиотеку

console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3
library.giveBookByName(new Library("Герберт Уэллс", "Машина времени", 1895, 138));
const booksAfterIssue = new Library("Герберт Уэллс", "Машина времени", 1895, 138);
console.log(booksAfterIssue);


 