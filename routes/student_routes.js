const express = require('express');
const router = express.Router();
const {getAllStudents, getStudentByIndex} = require('../controller/students_controller')

router.get('/', getAllStudents);

router.get('/:index',logParams, getStudentByIndex)


function logParams(req, res, next) {
    console.log(req.params);
    next();
}

module.exports = router;
