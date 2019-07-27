var connection = require("../MySqlDB");
var express = require("express");
var router = express.Router();

router.get("/users/", function (req, res) {
    connection.query('SELECT * from users', function (err, rows, fields) {
        if (err) {
            console.log("Error Below!")
            console.log(err);
        } else {
            res.send(rows);

        }
    });
});



router.get("/users/:id", function (req, res) {
    connection.query("SELECT * FROM users WHERE id = ?", [req.params.id], function (err, rows, fields) {
        if (err) {
            console.log(err)
        }
        else {
            res.send(rows);

        }
    });
});

router.post("/users/", (req, res) => {
    connection.query("INSERT INTO users(username) VALUE(?)", [req.body.username],
        function (err, rows, fields) {
            if (err) {
                console.log(err);
            }
            else {
                res.send({
                    message: "We put a person into the thing!"
                });
            }
        });
});

router.put("/users/:id", (req, res) => {
    connection.query("UPDATE users SET username = ?, primary_goal = ?, secondary_goal = ? WHERE id = ?", [req.body.username, req.body.primary_goal, req.body.secondary_goal, req.params.id], function (err, rows, fields) {
        if (err) {
            console.log(err);
        }
        else {
            res.send({
                message: "We updated the thing"
            })
        }
    });
});

router.delete("/users/:id", (req, res) => {
    connection.query("DELETE FROM users WHERE id = ?", [req.params.id], function (err, rows, fields) {
        if (err) {
            console.log(err)
        }
        else {
            res.send({
                message: "We deleted a thing from the thing!",
                thing: req.params.id
            })
        }
    })
});


module.exports = router;
