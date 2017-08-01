'use strict';
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    title: DataTypes.STRING,
    text: DataTypes.TEXT,
    price: DataTypes.DOUBLE
   } //, {
  //   classMethods: {
  //     associate: function(models) {
  //       // associations can be defined here
  //     }
  //   }
  // }
  );
  Product.associate = (models) => {
    // associations can be defined here
  };

  return Product;
};


