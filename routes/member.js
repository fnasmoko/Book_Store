const express = require('express');
const bodyParser = require('body-parser');
const {showMember} = require('../controller/member');
const router = express.Router();
// const verifytoken = require('../controller/verifytoken')

router.use(bodyParser.json());

router.get('/', showMember)

// router.post('/', addUser)

// router.delete('/:id',verifytoken, deleteUser)

module.exports = router;