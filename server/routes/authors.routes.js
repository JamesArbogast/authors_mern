const authorController = require("../controllers/authors.controller");

/*
LEADING SLASH REQUIRED in routes!
Export a function to be called in server.js where the app will be passed in.
*/
module.exports = (app) => {
  // When one of these URLS is visited, execute the corresponding method.
    app.post("/api/authors", authorController.create);
    app.get("/api/authors", authorController.getAll);
    app.get("/api/authors/:id", authorController.getOne);
    app.delete("/api/authors/:id", authorController.delete);
    app.put("/api/authors/:id/edit", authorController.update);
    app.post("/api/authors/many", authorController.createMany);
};