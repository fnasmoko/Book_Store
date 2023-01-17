const db = require('../model/dbBooksStore');

//get list of products
const getBook = (req, res) => {
    db.query("SELECT * FROM books where stock > 0", (err, result) => {
        if(err) throw err;
        res.status(200).json(result)
    })
}


function validation(name, quantity, price){
    if (name == undefined) {return 'data not complete'}
    if (quantity == undefined) {return 'data not complete'}
    if (price == undefined) {return 'data not complete'}

    if (name.length <= 3 || name.length >= 50 ){return 'name bad request'}
    if (isNaN(quantity) || quantity <= 1){return 'quantity bad request'}
    if (isNaN(price) || price <= 10000){return 'price bad request'}
}

module.exports = {getBook}