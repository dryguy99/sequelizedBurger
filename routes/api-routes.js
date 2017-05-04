// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require('../models');


// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/api/burgers", function(req, res, err) {
    if (err) {
      console.log("Error: " + err);
    }
    console.log("3 : select all")
   db.Burgers.findAll({})
        .then(function(result, error) {
          if (error) {
            console.log(error);
          } else {
          let tmp = result.map((data) => data.dataValues).filter((data) => !data.devoured);
          let tmp2 = result.map((data) => data.dataValues).filter((data) => data.devoured);
          res.render("home", { burgers: tmp, eaten : tmp2 });
        }
        });
   
  });

  // POST route for saving a new burger.
  app.post("/api/burgers/", function(req, res) {

    var burger = req.body.burger_name;
    var devoured = false;
   
   db.Burgers.create({
      burger_name: burger,
      devoured: devoured,
    }).then( function(dbBurgers) {
      
      res.redirect("/api/");
    });
  });

  // DELETE route for deleting burgers. 
  // req.params.id
  app.delete("/api/burgers/:id", function(req, res) {

    db.Burgers.destroy({
      where: {
        id: req.params.id
      }
    }).then( function (burger) {
      res.redirect("/api/");
    });
    
  });

  // PUT route for updating burgers. 
  app.put("/api/burgers/:id", function(req, res) {
    var newBurgers = {
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    };

    db.Burgers.update(newBurgers, {
        where: {
        id: req.params.id
      }
    }).then( function (burger) {
      res.redirect("/api/");
    });
    
  });
};
