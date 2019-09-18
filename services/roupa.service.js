﻿var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('roupas');

var service = {};

service.GetAll = GetAll;
service.Create = Create;

module.exports = service;

function GetAll() {

    var deferred = Q.defer();
    db.roupas.find().toArray(function(err, items) {
        if (items) {  
            deferred.resolve(items);
        } else {            
            deferred.resolve();
        }
        console.log(deferred.promise)
    });
    return deferred.promise;
    
}

function Create(roupa) {
    var deferred = Q.defer();

    db.roupas.insert(
        roupa,
        function (err, doc) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });
    

    return deferred.promise;
}