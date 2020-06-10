'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Contacts", [
      {
        firstName: "Blake",
        lastName: "ElBarbaro",
        phone: "01 800 200 200",
        email: "perroanciano@email.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Persick",
        lastName: "TheFatasaurs",
        phone: "01 800 600 600",
        email: "gatogordo@email.com",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
