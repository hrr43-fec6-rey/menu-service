const express = require('express');
require('dotenv').config();
const db = require('./../database');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.get('/getmenu/:id', (req, res) => {
  console.log(`requesting ${req.params.id}`);
  db.getRestaurantMenu(req.params.id, (restaurant) => {
    res.status(200).send(restaurant);
  });
});


app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
