const db = require('../model/dbBooksStore');

//get list of books by member
const getBorrowBook = (req, res) => {
    const name = req.params.id
    db.query("SELECT * FROM transactions where name = ?", name, (err, result) => {
    if(err) return err;
    res.status(200).json(result)
    })
}


//return of books
const returnBook = (req, res) => {
    const {id, name, return_date} = req.body
    db.query("SELECT * FROM transaction where name = ? and id = ?", [name, id], (err, result) => {
    let borrowDate = (result[0])['borrow_date'] 
    if ((result[0])['name'] == undefined || (result[0])['id'] == undefined) return res.status(400).json({message: `The member by '${name}' is not borrow a book`})
    db.query(`update books set stock = stock+1 where id_book = ?`, id, (err, result)=>{
        if(err) return err;
        db.query("SELECT stock, title FROM books where id_book = ?", id, (err, result) => {
        return res.status(400).json({message: `The return of '${(result[0])['title']}' book is successfull`})
        })
    if (borrowDate-return_date < 7) db.query(`update transaction set description = penalized 3 days, penalized_date = return_date + 3 where name = ?`, name, (err, result)=>{})
    
    })
    })
}

//borrow of books
const borrowBook = (req, res) => {
    const {name, id, borrow_date} = req.body; 
    
    let validator = validation(name, id, borrow_date)
    if (validator == 'id is missing'){
        return res.status(400).json({message: 'Please input id completely'})}
    if (validator == 'name is missing'){
        return res.status(400).json({message: 'Please input name completely'})}
    if (validator == 'borrow_date is missing'){
        return res.status(400).json({message: 'Please input borrow date completely'})}
    
    db.query("SELECT stock, title FROM books where id_book = ?", id, (err, result) => {
    if ((result[0])['stock'] <= 0) return res.status(400).json({message: `The stock of '${(result[0])['title']}' book is empty`})
    db.query("SELECT name, books_borrowed, penalized_date FROM transaction where name = ?", name, (err, result) => {
    if ((result[0])['books_borrowed'] > 2) return res.status(400).json({message: `The borrowed books by '${(result[0])['name']}' cannot more than two books`})
    if (borrow_date-(result[0])['penalized_date'] < 3) return res.status(400).json({message: `The member by '${(result[0])['name']}' cannot borrow books because of penalized`})
    db.query(`update books set stock = stock-1 where id_book = ?`, id, (err, result)=>{
    if(err) return err;
    let sqlQuery = `update transaction set name = ?, code = ?, borrow_date = ?, books_borrowed = books_borrowed+1, where id_book = ?` 
    db.query(sqlQuery, [name, id, borrow_date], (err, result) => {})
    // res.status(200).json({message: `Product with id ${id} has been updated`})
    res.status(200).json(result)
    })
    })
    })
}

function validation(id, name, title, author, stock){
    if (id == undefined) {return 'id is missing'}
    if (name == undefined) {return 'code is missing'}
    if (title == undefined) {return 'title is missing'}
    if (author == undefined) {return 'author is missing'}
    if (stock == undefined) {return 'stock is missing'}

    if (name.length <= 1 || name.length >= 50 ){return 'code bad request'}
    if (title.length <= 1 || title.length >= 50 ){return 'title bad request'}
    if (author.length <= 3 || author.length >= 50 ){return 'author bad request'}
    if (isNaN(id) || id < 0){return 'id bad request'}
    if (isNaN(stock) || stock < 0){return 'stock bad request'}
}




module.exports = {getBorrowBook, borrowBook, borrowBooks, returnBook}