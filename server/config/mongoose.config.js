const mongoose = require("mongoose");

module.exports = (authors_api) => {
    mongoose
        .connect(`mongodb://localhost/${authors_api}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
        .then(() => {
            console.log(`Successfully connected to ${authors_api}`);
        })
        .catch((err) => {
            console.log(`mongoose connection to ${authors_api} failed:`, err);
        });
};