
var router = require('express').Router();

import path from 'path'
var controller = require('require-all')(path.join(__dirname, "../controller"));
var middleware = require('require-all')(path.join(__dirname, "../middleware"));



// router.post('/auth', controller.auth.signin);
// router.get('/', controller.hi.hi);
router.post('/bank', controller.bank.create);

router.get('/bank', controller.bank.getAll);

module.exports = router;