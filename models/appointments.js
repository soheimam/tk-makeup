'use strict';
module.exports = (sequelize, DataTypes) => {
  const Appointments = sequelize.define('Appointments', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile: DataTypes.INTEGER,
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME
  }, {
    timestamps: false
  });
  Appointments.associate = function(models) {
    // associations can be defined here
  };
  return Appointments;
};