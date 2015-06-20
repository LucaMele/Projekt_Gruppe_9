

module.exports.createNote = function(req, res)
{
    res.format({
        'application/json': function(){
            res.send({ok: 'ok'});
        }
    });
};