var noteData = require("../db/db.json");

module.exports = function (app) {

    app.get("/api/notes", function(req, res) {
        res.json(noteData);
      });

    app.post('/api/notes', function(req,res)  {
        res.json(noteData);
    });

    app.post('/api/clear', function(req, res) {
        //Deleting the selected note
        
    });

}