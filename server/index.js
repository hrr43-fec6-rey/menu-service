const express = require('express');
require('dotenv').config();
const db = require('./../database');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/getmenu/:id', (req, res) => {
  console.log(`requesting ${req.params.id}`);
  db.getRestaurantMenu(req.params.id, (restaurant) => {
    res.status(200).json(restaurant);
  });
});

app.get('/gettitle/:id', (req, res) => {
  console.log(`requesting ${req.params.id}`);
  db.getRestaurantTitle(req.params.id, (restaurant) => {
    res.status(200).json(restaurant);
  });
});
<<<<<<< HEAD

const port = (process.env.PORT ? process.env.PORT : 8000);

=======

const port = (process.env.PORT ? process.env.PORT : 8000);

>>>>>>> master
app.listen(port, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});