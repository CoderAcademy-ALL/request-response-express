const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const studentsRouter = require('./routes/student_routes');

const app = express();
app.use(loggerMiddleware);
app.use('/students', studentsRouter)

app.get('/',(req, res) => {
    res.send("Hello world");
})


const port = 3000;

app.listen(port, () => console.log("server is running"));

function loggerMiddleware(req, res, next) {
    console.log(req.headers);
    next()
}

function errorHandling(req, res, next) { 
    if (req.error) {
        res.status(500);
        return res.json(error);
    }
    next();
}