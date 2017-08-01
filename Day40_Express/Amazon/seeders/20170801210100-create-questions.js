'use strict';
const faker = require('faker');
const {Product} = require('../models');

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    const products = Array.from({length: 100})
      .map(() => {
        // Question.create and all Sequelize query methods return a promise.
        return Product.create({
          title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
          text: faker.hacker.phrase(),
          price: faker.commerce.price()
        });
      });

    // Here, we're using Promise.all to wait until all the promises in the
    // `questions` array are resolved.
    return Promise.all(products);
  },


  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return Product.destroy({where: {}});
  }
};
