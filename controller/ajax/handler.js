var Datastore = require('nedb');
var db = new Datastore({ filename: './data/note.db', autoload: true });

module.exports.createNote = function(req, res) {

    var note = JSON.parse(req.body.form);

    db.insert(note, function(err, newDoc){
        res.format({
            'application/json': function(){
                res.send({storage_id: note._id});
            }
        });
    });


};