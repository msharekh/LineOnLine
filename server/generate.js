var faker = require('faker');
var database = {
  products: []
};

//fill database file
for (var i = 1; i <= 100; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    imageUrl: "https://source.unsplash.com/1600x900/?"+i+"",
    quantity: faker.random.number()
  });
}
console.log(JSON.stringify(database));
