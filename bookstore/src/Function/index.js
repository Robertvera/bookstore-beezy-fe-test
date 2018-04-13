import uuid from 'uuid/v4'


class Book {
    constructor(id, title, category, price) {
        this.id = id
        this.title = title
        this.category = category
        this.price = price
    }
}

const library = []

class Category {
    constructor(name, bookCount) {
        this.name = name
        this.bookCount = bookCount
    }
}

const categories = []

const bookstore = {
    createBook: (title, category, price) => {
        return Promise.resolve()
        .then(() => {
            const id = uuid()
            const book = new Book(id, title, category, price)
            library.push(book)
            return book
        })
    },
    
    listBooks: () => {
        return Promise.resolve()
        .then(()=> {                        
            return library            
        })
    },

    getOneBook: (id) => {
        return Promise.resolve()
        .then(()=> {
            let position
            for (let i = 0; i < library.length; i++) {
                if (library[i].id === id) {
                    position = i
                    break;
                }
            }
            return library[position]
        })
    },

    deleteBook: (id) => {
        return Promise.resolve()
        .then(()=> {
            let position
            for (let i = 0; i < library.length; i++) {
                if (library[i].id === id) {
                    position = i
                    break;
                }
            }
            library.splice(position,1)
            
            return library
        })

    },

    editBook: (id, title, category, price) => {
        return Promise.resolve()
        .then(()=> {
            let position
            for (let i = 0; i < library.length; i++) {
                if (library[i].id === id) {
                    position = i
                    break;
                }
            }
            library[position].title = title
            library[position].category = category
            library[position].price = price

            return library
        })
    },

    createCategory: (name, bookCount) => {
        return Promise.resolve()
        .then(()=> {
            const category = new Category(name, bookCount)
            categories.push(category)
            return category
        })
    },

    listCategories: () => {
        return Promise.resolve()
        .then(()=> {
            return categories
        })
    },

    getBooksByCategory: (_category)=> {
        return Promise.resolve()
        .then(()=> {
            const filteredLibrary = library.filter((book)=>{
                return book.category === _category
            })
            return filteredLibrary
        })
    }


}

bookstore.createCategory("Sci-fi", 1)
bookstore.createCategory("History", 1)
bookstore.createCategory("Science", 1)

bookstore.createBook('Foundation', 'Sci-fi', 30)
bookstore.createBook('Art of War', 'History', 85)
bookstore.createBook('A Brief History of Time', 'Science', 25)


export default bookstore