var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "tip_server_development"
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("\n----$---------------------$----\n" +
                    "----$----- mysql db ------$----\n" +
                    "----$---- connection -----$----\n" +
                    "----$---- successful -----$----\n" +
                    "----$---------------------$----"
        );
    }
});

module.exports = connection;