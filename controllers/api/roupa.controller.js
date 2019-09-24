var express = require('express');
var router = express.Router();
var roupaService = require('services/roupa.service');

// routes
router.post('/addproduct', addProduct);
router.get('/search/:_name', searchName);
router.get('/:_id', getProduct);
router.get('', getAll);
router.put('/:_id', updateProduct);
router.delete('/:_id', deleteProduct);


module.exports = router;

function addProduct(req, res) {
    roupaService.create(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getProduct(req, res) {
    roupaService.getById(req.params._id)
        .then(function (productObject) {
            if (productObject) {
                res.send(productObject);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getAll(req, res) {
    roupaService.getAll()
        .then(function (productList) {
            if (productList) {
                res.send(productList);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function updateProduct(req, res) {
    roupaService.update(req.params._id, req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function deleteProduct(req, res) {
    roupaService.delete(req.params._id)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function searchName(req, res) {
    roupaService.searchByName(req.params._name)
        .then(function (productList) {
            if (productList) {
                res.send(productList);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}