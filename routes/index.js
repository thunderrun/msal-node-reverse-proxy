/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    if (process.env.PROXY_APP_HOMEPAGE !== '/') {
        return res.redirect(process.env.PROXY_APP_HOMEPAGE);
    }
    next();
});

module.exports = router;
