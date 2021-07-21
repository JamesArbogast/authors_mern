const Author = require("../models/authors.model");

// Export an object that is full of methods.
module.exports = {
  // long-form - key: value format
    create: function (req, res) {
        console.log("create method executed");

        Author.create(req.body)
            .then((author) => {
                // newly created DB model instance
                res.json(author);
                console.log(res.json(author))
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    // Shorthand key value pair, key name will be the name of the function and value will be the function.
    getAll(req, res) {
        console.log("getAll method executed");

        Author.find()
            .then((authors) => {
                res.json(authors);
            })
            .catch((err) => {
                res.json(err);
            });
        },

    getOne(req, res) {
        console.log("getOne method executed", "url params", req.params);

        Author.findById(req.params.id)
            .then((author) => {
                res.json(author);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    delete(req, res) {
        console.log("delete method executed", "url params", req.params);

        Author.findByIdAndDelete(req.params.id)
            .then((author) => {
                res.json(author);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    update(req, res) {
        console.log("update method executed", "url params:", req.params);

        Author.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true, // return the newly updated model
        })
            .then((updatedAuthor) => {
                res.json(updatedAuthor);
            })
            .catch((err) => {
                res.json(err);
            });
        },

    // You don't need to know this.
    createMany(req, res) {
        const promises = req.body.map((authors) => {
        return Destination.create(authors);
    });

    Promise.allSettled(promises).then((results) => {
            res.json(results);
            console.log(results);
        }); 
    },
};