const express = require('express');
const bodyParser = require('body-parser');
const {getBorrowBook, borrowBook, returnBook} = require('../controller/transaction')
const router = express.Router();
// const verifytoken = require('../controller/verifytoken')

router.use(bodyParser.json());

// router.post('/',verifytoken, addProduct)

// router.delete('/:id',verifytoken, deleteProduct)

// router.put('/:id',verifytoken, updateProduct)

router.get('/', getBorrowBook)

router.post('/borrow/', borrowBook)

router.post('/return/', returnBook)

module.exports = router;