const express = require('express');
const router = express.Router();

const users = [];
var id = 1;

// GET Requests
router.get('/users', (req, res, next) => {
	return res.render("index", {users}); // {{users}} --> {{users: users}}
});

router.get("/users/new", (req, res, next) => {
	return res.render("new");
});

router.get("/users/:id", (req, res, next) => {
	const user = users.find(val => val.id === Number(req.params.id));
	return res.render("show", {user});
});

router.get("/users/:id/edit", (req, res, next) => {
	const user = users.find(val => val.id === Number(req.params.id));
	return res.render("edit", {user});
});

// POST Requests
router.post("/users", (req, res, next) => {
	users.push({
		name: req.body.name,
		id: ++id
	});
	return res.redirect("/users");
});

module.exports = router;