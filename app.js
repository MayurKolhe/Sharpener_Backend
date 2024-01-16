const express = require("express");
const app = express();
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const contactusRoutes = require("./routes/contactus");

const rootDir = require('./util/path')

app.use(express.json())

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));


app.use("/admin", adminRoutes);

app.use(shopRoutes);

app.use(contactusRoutes);



app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir,'views','404.html'));
});

app.listen(3000);
