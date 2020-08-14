const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const mainPageRoute = require("./routes/mainPage");
app.use(bodyParser.urlencoded({extended:false}));
app.use(mainPageRoute);
app.use(express.static(path.join(__dirname,'public')));


app.listen (3000);