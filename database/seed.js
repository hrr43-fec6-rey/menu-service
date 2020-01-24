const process = require('process');
const faker = require('faker');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/menus', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});

let records = [];

for (let i = 0; i < 100; i++) {
  records[i] = {
    "id": i + 1,
    "restaurant": faker.random.words(),
    "menus": []
  }

  for (let j = 0; j < 5; j++) {
    records[i].menus[j] = {
      "title": faker.random.word(),
      "description": faker.lorem.sentence() + faker.lorem.sentence(),
      "sections": []
    }

    for (let k = 0; k < 3; k++) {
      records[i].menus[j].sections[k] = {
        "title": faker.random.words(),
        "items": []
      }

      for (let l = 0; l < 6; l++) {
        records[i].menus[j].sections[k].items[l] = {
          "title": faker.random.words(),
          "price": "$" + faker.finance.amount(),
          "description": faker.lorem.sentence()
        }
      }
    }
  }
}

let itemSchema = mongoose.Schema({
  title: String,
  price: String,
  description: String
});

let sectionSchema = mongoose.Schema({
  title: String,
  items: [itemSchema]
});

let menuSchema = mongoose.Schema({
  title: String,
  description: String,
  sections: [sectionSchema]
});

let restaurantSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  restaurant: String,
  menus: [menuSchema]
});

const Restaurants = mongoose.model('restaurants', restaurantSchema);

Restaurants.collection.insert(records, (err) => {
  if (err) console.log(err);
  console.log("Complete");
  process.exit(0);
});