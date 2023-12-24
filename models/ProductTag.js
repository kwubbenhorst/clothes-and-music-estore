// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

class ProductTag extends Model {}

//Set up fields ie columns and rules for ProductTag model 
ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

//Exports the model so it can be imported by models/index.js and in turn exported from there with the 3 other models to be imported by  the files in the routes/api folder
module.exports = ProductTag;
