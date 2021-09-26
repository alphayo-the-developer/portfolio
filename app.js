const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();

app.set('view engine','ejs');
app.set('views','views');



app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req,res,next) => {
    res.render('index')
})

app.listen(5000);
