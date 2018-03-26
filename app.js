// Express App
const express = require("express");
const app = express();

// Editing/Deleting (for PATCH and DELETE requests)
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

// Form Data Collection
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

// Log HTTP Requests
const morgan = require("morgan");
app.use(morgan("tiny"));

// View Engine
app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));

// Express Router
const userRoutes = require("./routes");
app.use(userRoutes);

// Redirect to Homepage
app.get("/", (req, res, next) => {
	return res.redirect("/users");
})

// Run Server
app.listen(3000, () => console.log("Server runnin, head to localhost:3000..."));