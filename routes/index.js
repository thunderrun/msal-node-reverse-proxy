/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.redirect('/GonvvamaReport/ureport/designer')
});

router.get('/center', function (req, res, next) {
    res.render('index', {
        title: 'GONVVAMA Authentication Center',
        isAuthenticated: req.session.isAuthenticated,
        username: req.session.account?.username,
    });
});

module.exports = router;
