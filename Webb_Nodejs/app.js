const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views')
//const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use('/css', express.static(__dirname + '/views/css'));
app.use('/style.css', express.static(__dirname + '/views/style.css'));
app.use('/js', express.static(__dirname + '/views/js'));
app.use('/img', express.static(__dirname + '/views/img'));
app.use('/fonts', express.static(__dirname + '/views/fonts'));

// app.use('/admin', adminRoutes);
app.use(express.static('public'));
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});
const port = 5000;
app.listen(port, () => console.log(
    `Example app listening at http://localhost:${port}`,
  ));

