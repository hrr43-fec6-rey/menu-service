const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/menus', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const itemSchema = mongoose.Schema({
  title: String,
  price: String,
  description: String,
});
const sectionSchema = mongoose.Schema({
  title: String,
  items: [itemSchema],
});
const menuSchema = mongoose.Schema({
  title: String,
  description: String,
  sections: [sectionSchema],
});
const restaurantSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  restaurant: String,
  menus: [menuSchema],
});
const Restaurants = mongoose.model('restaurants', restaurantSchema);

const getRestaurantMenu = (id, cb) => {
  Restaurants.find({ id }, (err, restaurant) => {
    if (err) {
      return console.log(err);
    }
    return cb(restaurant);
  });
};

module.exports.getRestaurantMenu = getRestaurantMenu;
