var Company = require('../models/company');


module.exports = {
    create: create,
    getAll: getAll
}


// DAO


function create(data) {
 
  return Company.create(data)
    .then(function(result) {
        console.log(result, 234);
        return result;
    })
    .catch(function (error) {
        return error;
    });
}



function getAll(data) {
     return Company.find().exec()
    .then(function(result) {
        console.log(result, 555);
        return result;
    })
    .catch(function (error) {
        return error;
    });
}