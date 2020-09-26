var noteData = require('../db/db.json');

module.exports = function (app) {

    app.get('/api/notes', function(req, res) {
        res.json(noteData);
    });

    app.post('/api/notes', function(req,res)  {
        noteData.push(req.body);
        res.json(true);
    });

    app.delete('/api/notes/:id', function(req,res)  {
        var deleteID = req.params.id
        let note = noteData.filter(note => {
            return note.id == deleteID;
        })[0];
        const index = noteData.indexOf(note);
        noteData.splice(index, 1);
        res.json(true);
    });
               


}