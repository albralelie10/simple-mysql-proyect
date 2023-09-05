const express = require("express");
const {getAllBooks,getOneBook,addNewBook,updateBook,deleteBook}=require("../controllers/controller")


const router = express.Router();

//books

router.route("/books").get(getAllBooks).post(addNewBook);

//books/:id

router.route("/books/:id").get(getOneBook).delete(deleteBook)

//books/:id/edit

router.route("/books/:id/edit").put(updateBook);


module.exports=router;

