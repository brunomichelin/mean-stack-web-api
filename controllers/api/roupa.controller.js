var express = require('express');
var router = express.Router();
var roupaService = require('services/roupa.service');

// routes
router.post('/create', registerRoupa);
router.get('/getAll', getRoupas);

module.exports = router;

function registerRoupa(req, res) {
    
    roupaService.Create(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getRoupas(req, res) {
    
    roupaService.GetAll().then(function (roupas) {
            if (roupas) {
                res.send(roupas);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}