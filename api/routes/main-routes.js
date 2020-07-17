const express = require('express');
const router = express.Router();

const person = require('../controllers/person');
router.use('/person', person);  

module.exports = router;