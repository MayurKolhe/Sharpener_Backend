const express = require('express');

const router = express.Router();


router.get('/',(req, res, next) => {
    console.log("In another MiddleWare..!!");
    res.send('<h1> Hello Welcome Express JS </h1>');
});



module.exports = router;

