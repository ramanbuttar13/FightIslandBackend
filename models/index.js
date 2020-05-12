// 'use strict';
console.log('her232323eererer')
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
console.log('wutwutwutwutwutwutwutwutwutwutwutwutwut wut 1')
let sequelize;
if (config.use_env_variable) {
  console.log(config)
  console.log('wut wut 1')
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  console.log(config)
  console.log('wut wut ')
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
