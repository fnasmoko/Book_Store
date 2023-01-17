const db = require('../model/dbBooksStore');

// get user of merchant service
const showMember = (req, res) => {
    db.query("SELECT * FROM members", (err, result) => {
        if(err) throw err;
        res.status(200).send(result)
    })
}

module.exports = {showMember}