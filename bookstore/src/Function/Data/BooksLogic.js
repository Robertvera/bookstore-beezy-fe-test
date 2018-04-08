const bookData = {
    book: class Book {
            constructor (id, title, genre, price) {
                this.id = id,
                this.title = title,
                this.genre = genre,
                this.price = price
        }
    },

    library: []
}

export default {book, library};