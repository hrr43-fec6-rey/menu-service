var express = require('express');
require('dotenv').config();

var app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.get('/api', (req, res) => {

});


app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});