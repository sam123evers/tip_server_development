var express = require("express");
var router = express.Router();
var connection = require("../MySqlDB");

router.get("/bills", function (req, res) {
    connection.query("SELECT * FROM bills;", function (err, rows, fields) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(rows)
        }
    })
});

router.get("/bills/:id", function (req, res) {
    connection.query("SELECT * FROM bills WHERE bill_id = ?", [req.params.id], function (err, rows, fields) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(rows);
        }
    });
});

router.post("/bills", function (req, res) {
    connection.query("INSERT INTO bills (name_of_bill, bill_id, must_pay_by, belongs_to_user_with_id) values(?, ?, NOW(), ?)",
        [req.body.name_of_bill, req.body.bill_id, req.body.belongs_to_user_with_id],
        function (err, rows, fields) {
            if (err) {
                console.log(err);
            }
            else {
                res.send({
                    message: "bill added to database.  It Worked!"
                })
            }
    });
});

router.put("/bills/:id", function (req, res) {
    connection.query("UPDATE bills SET name_of_bill = ?, must_pay_by = ? WHERE bill_id = ?", [req.body.name_of_bill, req.params.id, function (err, rows, fields) {
        if (err) {
            console.log(err);
        }
        else {
            res.send({
                message: "bill info updated in database.  It Worked!"
            });
        }
    }])
})



module.exports = router;