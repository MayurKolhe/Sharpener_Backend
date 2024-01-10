const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log("In the Middleware");
    next();
})

app.use((req, res, next) => {
    console.log("In another MiddleWare..!!")
    res.send('<h1> Hello Welcome Express JS');
})

app.listen(3000);
