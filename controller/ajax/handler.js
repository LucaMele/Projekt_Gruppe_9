var Datastore = require('nedb');
var db = new Datastore({ filename: './data/note.db', autoload: true });

module.exports.createNote = function(req, res) {

    var note = JSON.parse(req.body.form);
    note.id = new Date().getTime() +  Math.floor((Math.random() * 1000) + 1);


    db.insert(note, function(err, doc){
        res.format({
            'application/json': function(){
                res.send({storage_id: note.id});
            }
        });
    });


};



module.exports.getNote = function(req, res) {
    db.find({id: +req.originalUrl.replace( /^\D+/g, '')}, function(err, doc){
        res.format({
            'application/json': function(){
                res.send(doc);
            }
        });
    });
};

module.exports.getNoteList = function(req, res) {
    db.find({}, function(err, doc){
        res.format({
            'application/json': function(){
                res.send(doc);
            }
        });
    });
};