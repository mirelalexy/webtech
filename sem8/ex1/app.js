import express from "express";
import Book from "./Book.js";

const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const bookRouter = express.Router();
app.use('/api', bookRouter);

app.get("/", (req, res) => {
    res.send("Welcome to my API!");
})

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})

let books = [new Book(1, "Dune", "sf", "Frank Herbert"),
new Book(2, "Robinson Crusoe", "adventure", "Daniel Defoe"),
new Book(3, "Foundation", "sf", "Asimov")]

bookRouter.route("/books")
    .get((req, res) => {
        let filteredBooks = {};
        if (req.query.genre) {
            filteredBooks = books.filter(x => x.genre === req.query.genre);
        }
        else {
            filteredBooks = books;
        }
        res.json(filteredBooks);
    })

    .post((req, res) => {
        const { id, title, genre, author } = req.query;

        if (!id || !title || !genre || !author) {
            return res.status(400).json({ error: "All fields are required."});
        }

        const bookId = Number(id);
        if (isNaN(bookId)) {
            return res.status(400).json({ error: "Id must be a number."});
        }

        if (typeof title !== "string" || typeof genre !== "string" || typeof author !== "string") {
            return res.status(400).json({ error: "Title, genre, and author must be strings."});
        }

        const newBook = new Book(bookId, title, genre, author);
        books.push(newBook);
        console.log(books);
        return res.json(newBook);
    })

bookRouter.route("/books/:bookId")
    .put((req, res) => {
        let bookModif = books.find(x => x.id === Number(req.params.bookId));
        
        if (!bookModif) {
            return res.status(404).json({ error: "Book not found"});
        }
        
        bookModif.title = req.body.title;
        bookModif.genre = req.body.genre;
        bookModif.author = req.body.author;
        return res.json(bookModif);
    })

    .delete((req, res) => {
        const bookId = Number(req.params.bookId);

        const index = books.findIndex(x => x.id === bookId);

        if (index === -1) {
            return res.status(404).json({ error: "Book not found"});
        }

        const deletedBook = books.splice(index, 1)[0];

        return res.json({ message: "Book deleted.", book: deletedBook});
    })