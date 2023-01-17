const express = require('express');
const member = require('./routes/member');
const transaction = require('./routes/transaction');
const book = require('./routes/book');
// const login = require('./routes/authentication');

const app = express();
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Welcome to Book Store')
})

// app.use('/login', login)

app.use('/member', member)

app.use('/transaction', transaction)

app.use('/book', book)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})