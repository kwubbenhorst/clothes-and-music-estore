// This is one of four Model files which structure the four tables of the database. Source code was provided, but the definition of fields was left up to me.
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
    //Removed product_id and tag_id from Tag.js and used tag_name there instead.  Added product_id and tag_id in here.  This is an attempt to resolve a problem with the tag table not seeding.  I think this was caused by a conflict because product_id and tag_id were fields defined directly in the Tag model but they were also part of the ProductTag model
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
      },
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

module.exports = ProductTag;
