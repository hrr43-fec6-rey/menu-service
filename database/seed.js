const process = require('process');
const faker = require('faker');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/menus',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

const records = [];

for (let i = 0; i < 100; i += 1) {
  records[i] = {
    id: i + 1,
    restaurant: faker.random.words(),
    menus: [],
  };

  for (let j = 0; j < 5; j += 1) {
    records[i].menus[j] = {
      title: faker.random.word(),
      description:
        `${faker.lorem.sentence()}
         ${faker.lorem.sentence()}
         ${faker.lorem.sentence()}
         ${faker.lorem.sentence()}
         ${faker.lorem.sentence()}`,
      sections: [],
    };

    for (let k = 0; k < 3; k += 1) {
      records[i].menus[j].sections[k] = {
        title: faker.random.words(),
        items: [],
      };

      for (let l = 0; l < 6; l += 1) {
        records[i].menus[j].sections[k].items[l] = {
          title: faker.random.words(),
          price: `$${faker.finance.amount()}`,
          description: `${faker.lorem.sentence()} ${faker.lorem.sentence()}`,
        };
      }
    }
  }
}

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

Restaurants.remove({}, (err1) => {
  if (err1) {
    return console.log(err1);
  }
  Restaurants.collection.insert(records, (err2) => {
    if (err2) {
      return console.log(err2);
    }
    console.log('Complete');
    process.exit(0);
  });
  return null;
});
