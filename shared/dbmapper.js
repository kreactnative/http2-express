var _ = require('lodash');
var shared = require('./index')
// todo need to refactor with lodash
var createMapper = function(modelName, dbModel, viewModel) {
    var model = {};
    var result = _.forOwn(dbModel, function(item, key) {
        var isAuto = item.autoIncrement || false;
        var isUpdate = key == 'updated_at';
        var isCreate = key == 'created_at';
        var isAuth_key = key == 'auth_key';
        var value = viewModel[key];
        if (isCreate)
            value = shared.utcNow();
        if (isUpdate)
            value = shared.utcNow();
        if (isAuth_key)
            value = +new Date;
        if (!isAuto && (value != undefined))
            model[key] = value;
        }
    );
    //console.log(dbModel);
    //console.log(modelName);
    //console.log(model);
    return model;
};

// todo need to refactor with lodash
var updateMapper = function(modelName, dbModel, viewModel) {
    var model = {};
    var result = _.forOwn(dbModel, function(item, key) {
        var isAuto = item.autoIncrement || false;
        var isUpdate = key == 'updated_at';
        var isCreate = key == 'created_at';
        var value = viewModel[key];
        if (isUpdate)
            value = shared.utcNow();
        if (!isAuto && !isCreate && (value != undefined))
            model[key] = value;
        }
    );
    //console.log(modelName);
    //if (modelName == "task") {
        //if (model.status == undefined || model.status>3) {
            //delete model.updated_at;
        //}
    //}
    return model;
};

module.exports = {
    createMapper: createMapper,
    updateMapper: updateMapper
};

// db.user.attributes
/*var column = {};
var result=_.forOwn(db.user.attributes,function(item, key) {
    var isAuto=item.autoIncrement || false;
    if(!isAuto)
      column[key]='';
});
//console.log(column);*/
