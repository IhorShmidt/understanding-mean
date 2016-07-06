'use strict';

var path = require('path');
var BankDao = require('../dao/bank');

//CONTROLLER

module.exports = {
    getAll: getAll,
    getById: getById,
    create: create,
    deleteById: deleteById,
    updateById: updateById,
    createGet: createGet
};


function getAll(req, res) {
    BankDao.getAll().then(function (data) {
        res.status(200).send(data);
    }).catch(function (error) {
        res.status(error.status).send(error.data);
    });
}

function getById(req, res) {
    BankDao.getById().then(function (data) {
        res.status(200).send(data);
    }).catch(function (error) {
        res.status(error.status).send(error.data);
    });
}

function create(req, res) {
    var data = req.body;
    
    BankDao.create(data).then(function (data) {
        res.status(200).send(data);
    }).catch(function (error) {
        res.status(error.status).send(error.data);
    }); 
}

function deleteById(req, res) {
    BankDao.deleteById().then(function (data) {
        res.status(200).send(data);
    }).catch(function (error) {
        res.status(error.status).send(error.data);
    });
}

function updateById(req, res) {
    BankDao.update().then(function (data) {
        res.status(200).send(data);
    }).catch(function (error) {
        res.status(error.status).send(error.data);
    });
}

function createGet(req, res) {
    var data = req.body;
     BankDao.createGet(data).then(function (data) {
        res.status(200).send(data);
    }).catch(function (error) {
        res.status(error.status).send(error.data);
    });
}