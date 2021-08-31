const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;




app.engine('.html', require('ejs').__express);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');


app.get('/', (req, res) => {
   res.render('index', {title: "Welcome", error: null});
   //res.send('Home Page Route');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
