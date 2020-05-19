'use strict';
module.exports = (sequelize, DataTypes) => {
  const log = sequelize.define('log', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    data_values: DataTypes.STRING,
    previous_data_values: DataTypes.STRING,
    data_changed: DataTypes.STRING,
    entity: DataTypes.STRING,
    entity_id: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER,
    type: DataTypes.INTEGER
  }, {});
  log.associate = function(models) {
    // associations can be defined here
  };
  return log;
};