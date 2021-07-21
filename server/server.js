const express = require("express");
const cors = require("cors");

// Environment vars
const port = 5000;
const authors_api = "authors_api";

require("./config/mongoose.config")(authors_api);

// app is a function but it also has key value pairs on it like an object.
const app = express();

// req.body undefined without this!
app.use(express.json());
app.use(cors());

require("./routes/authors.routes")(app);

app.listen(port, () =>
    console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);