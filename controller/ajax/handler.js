var Datastore = require('nedb');
var db = new Datastore({ filename: './data/note.db', autoload: true });

module.exports.createNote = function(req, res) {
    var note = JSON.parse(req.body.form),
        d = new Date();
    note.id = new Date().getTime() +  Math.floor((Math.random() * 1000) + 1);
    note.state = "OK";
    note.finishedDate = "0000-00-00";
    note.createdDate = d.getMilliseconds();
    note.finished = 0;
    db.insert(note, function(err, doc){
        res.format({
            'application/json': function(){
                res.send({storage_id: note.id});
            }
        });
    });
};

module.exports.updateNote = function(req, res) {
    var note = JSON.parse(req.body.form);
    note.id = +req.originalUrl.replace( /^\D+/g, '');
    note.state = "OK";
    db.update({ id: note.id  }, note, {}, function (err, numReplaced) {
        res.format({
            'application/json': function(){
                res.send({storage_id: note.id});
            }
        });
    });
};

module.exports.deleteNote = function(req, res) {
    var id = +req.originalUrl.replace( /^\D+/g, '');
    db.update({id: id, state: 'OK'},  {$set: {"state": "DELETED"}}, function (err, numReplaced) {
        res.format({
            'application/json': function(){
                res.send({storage_id: null});
            }
        });
    });
};

module.exports.getNote = function(req, res) {
    db.find({id: +req.originalUrl.replace( /^\D+/g, ''), state: 'OK'}, function(err, doc){
        res.format({
            'application/json': function(){
                res.send(doc);
            }
        });
    });
};

module.exports.getNoteList = function(req, res) {
    var sortObj = {},
        findObject = {state: 'OK'};
    if (typeof req.query.o === 'undefined' && req.query.has !== 'undefined') {
        if(typeof req.query.q !== 'undefined') {
            findObject[req.query.q] = isNaN(req.query.has) ? new RegExp(req.query.has) : +req.query.has;
        }
        db.find(findObject, function(err, doc){
            res.format({
                'application/json': function(){
                    res.send(doc);
                }
            });
        });
    } else {
        if(typeof req.query.q !== 'undefined' && req.query.q !== '') {
            sortObj[req.query.q] = req.query.o === 'ASC' ? 1 : -1;
        }
        // You can sort in reverse order like this
        db.find(findObject).sort(sortObj).exec(function (err, docs) {
            res.format({
                'application/json': function(){
                    res.send(docs);
                }
            });
        });
    }
};