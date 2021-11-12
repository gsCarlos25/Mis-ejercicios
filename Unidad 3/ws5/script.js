// the cat

/* var cat = new Object();

cat.tiredness = "";
cat.hunger = "";
cat.loneliness = "";
cat.happiness = "";

cat.feed = (() => cat.hunger = "no hunger");
cat.sleep = (() => cat.tiredness = "antive");
cat.pet = (() => {
    cat.hapiness = "happy";
    cat.loneliness = "in love";
}) */

// the reading list

class BookList{
    constructor(){
        this.book_read = 0;
        this.book_not_read = 0;
        this.book_to_read = book;
        this.book_reading = book;
        this.last_reading = book;
        this.allBooks = [].push(book);
    }
}

class Book{
    constructor(titulo,genero,autor,leyendo,fecha_leido){
        this.tile = titulo;
        this.genre = genero;
        this.author = autor;
        this.read_date = fecha_leido;
    }
}