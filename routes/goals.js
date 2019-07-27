var express = require("express");
var router = express.Router();
var connection = require("../MySqlDB");

router.get("/goals", function (req, res) {
    connection.query("SELECT * FROM goals", function (err, rows, fields) {
        if (err) {
            console.log("Error--->", err.message);
        }
        else {
            res.send(rows);
        }
    })
});

router.get("/goals/:id", function (req, res) {

    connection.query("SELECT * FROM goals WHERE goal_id = ?", [req.params.id], function (err, rows, fields) {
        if (err) {
            console.log(err);
        }
        else {

            res.send(rows);
        }
    });
});



router.post("/goals", function (req, res) {
    connection.query("INSERT INTO goals(goal_name, goal_id, belongs_to_user_with_id) VALUES(?, ?, ?)",
        [req.body.goal_name, req.body.goal_id, req.body.belongs_to_user_with_id],
        function (err, rows, fields) {
            if (err) {
                console.log(err.message);
            }
            else {
                res.send({
                    message: "Goal successfully added!",
                    goal_id: req.body.goal_id
                });
            }
        });
});

router.put("/goals/:id", function (req, res) {

    connection.query("UPDATE goals SET goal_name = ? WHERE goal_id = ?", [req.body.goal_name, req.params.id], function (err, rows, fields) {
        console.log(err);
        if (err) {
            console.log(err.message);
        }
        else {
            res.send({
                message: "Goal Successfully Updated!",
                goal_id: req.params.id
            })
        }
    });
});

router.delete("/goals/:id", function (req, res) {

    connection.query("DELETE FROM goals WHERE goal_id = ?", [req.params.id], function (err, rows, fields) {
        if (err) {
            console.log(err.message);
        }
        else {
            res.send({
                message: "succussfully deleted goal with this id-->" + req.params.id
            })
        }
    });
});

module.exports = router;
