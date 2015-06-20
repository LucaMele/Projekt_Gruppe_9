/**
 * Created by Luca on 20.06.2015.
 */

var express = require('express');
var router = express.Router();
var ajax = require('../controller/ajax/handler.js');

router.post("/note", ajax.createNote);

module.exports = router;