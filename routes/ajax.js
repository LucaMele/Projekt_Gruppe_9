/**
 * Created by Luca on 20.06.2015.
 */
var express = require('express');
var router = express.Router();
var ajax = require('../controller/ajax/handler.js');

router.post("/note", ajax.createNote);
router.get("/note", ajax.getNoteList);
router.get("/note/:id", ajax.getNote);
router.put("/note/:id", ajax.updateNote);
router.delete("/note/:id", ajax.deleteNote);

module.exports = router;