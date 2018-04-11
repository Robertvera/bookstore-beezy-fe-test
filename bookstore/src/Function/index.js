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

let cat1 = new Category("Sci-fi", 0)
let cat2 = new Category("History", 0)
let cat3 = new Category("Science", 0)

const categories = [cat1, cat2, cat3]

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

export default bookstore