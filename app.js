const express = require("express");

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false }));

app.use('/add-product', (req, res, next) => {
    res.send(
      '<form action= "/product" method="post"><input type="text" name = "title"/><input type="Number" name = "size"/><button type="submit">Add Product</button></form>'
    );
})

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})


app.use('/',(req, res, next) => {
    console.log("In another MiddleWare..!!")
    res.send('<h1> Hello Welcome Express JS');
})

app.listen(3000);
