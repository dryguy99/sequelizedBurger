var db = require("../models");

module.exports = function(app) {
  app.get("/api/creators", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Creators.findAll({
      include: [db.Burgers]
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.get("/api/creators/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Creators.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.post("/api/creators", function(req, res) {
    db.Creators.create(req.body).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.delete("/api/creators/:id", function(req, res) {
    db.Creators.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

};