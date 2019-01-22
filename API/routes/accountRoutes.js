const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const Account = require('../models/account');

router.get('/', (req, res) => {
    Account.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                Error: err
            });
        });
});

router.post('/', (req, res) => {
    const account = new Account({
        _id: mongoose.Types.ObjectId(),
        username: req.body.username,
        password: req.body.password
    });
    console.log(account);
    account.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                createdProduct: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                Error: err
            });
        });
});

router.get('/:accountId', (req, res) => {
    const accountId = req.params.accountId;
    Account.findById(accountId)
        .exec()
        .then(doc => {
            console.log(doc);
            if(doc){
                res.status(200).json(doc);
            } else {
                res.status(404).json({
                    message: "No account with the specified account ID"
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                Error: err
            });
        });
});

module.exports = router;