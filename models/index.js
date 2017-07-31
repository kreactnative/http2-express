var fs = require('fs'),
    path = require('path'),
    Sequelize = require('sequelize'),
    lodash = require('lodash'),
    mapper = require('../shared/dbmapper'),
    config = require('../config');

var sequelize = new Sequelize(config.DB.DB_NAME, config.DB.USERNAME, config.DB.PASSWORD, {
        host: config.DB.SERVER,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        logging: config.DB_LOG,
        define: {
            timestamps: false
        }
    }),
    db = {};

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.log('Unable to connect to the database:', err);
});

fs.readdirSync(__dirname).filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js')
}).forEach(function(file) {
    var model = sequelize.import (path.join(__dirname, file))
    db[model.name] = model
    // extend auto mapper db vs viewmodel
    db[model.name].mapCreate = function(attrs, viewModel) {
        return mapper.createMapper(model.name, attrs, viewModel);
    };
    db[model.name].mapUpdate = function(attrs, viewModel) {
        return mapper.updateMapper(model.name, attrs, viewModel);
    };
});

Object.keys(db).forEach(function(modelName) {
    if (db[modelName].options.hasOwnProperty('associate')) {
        db[modelName].options.associate(db)
    }
});

var dbBuild = lodash.extend({
    sequelize: sequelize,
    Sequelize: Sequelize
}, db);

//console.log(dbBuild);
//console.log(sequelize)

module.exports = {
  dbBuild: dbBuild,
  sequelize : sequelize
};
