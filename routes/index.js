/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.redirect(process.env.PROXY_APP_HOMEPAGE)
});

module.exports = router;
