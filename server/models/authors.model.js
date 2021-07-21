const mongoose = require("mongoose");

/* 
{PATH} will be replaced with the field name, such as "location".
*/
const AuthorSchema = new mongoose.Schema(
    {
        name : {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
        }
    },
        { timestamps: true }
);

/* 
Register schema with mongoose and provide a string to name the collection. This
also returns a reference to our model that we can use for DB operations.
*/
const Author = mongoose.model("author", AuthorSchema);
module.exports = Author;