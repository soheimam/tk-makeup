'use strict';
module.exports = (sequelize, DataTypes) => {
  const Availability = sequelize.define('Availability', {
    date: DataTypes.STRING,
    available: DataTypes.ARRAY(DataTypes.INTEGER),
    unavailable: DataTypes.ARRAY(DataTypes.INTEGER)
  }, {
    timestamps: false
  });
  Availability.associate = function(models) {
    // associations can be defined here
  };
  return Availability;
  
};