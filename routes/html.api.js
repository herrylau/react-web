/**
 * Created by Microlv on 2015/9/10.
 */
'use strict';

var express = require('express');
var router = express.Router();

function render(html) {
  return function (req, res) {
    res.render(html);
  };
}

//client
//view folder
router.get('/', render('index'));

//admin
//can't use admin,because the it conflice with public admin
router.get('/ad', render('login'));
router.get('/login', render('login'));
router.get('/adindex', render('admin'));

module.exports = router;

