var express = require("express");
var app = express();
var router = require("./routes/index");
//var connection = require("./MySqlDB");
var bodyParser = require("body-parser");
const port = 3000;



//var router = express.Router();


app.use(bodyParser());

app.use(require('./routes'));
app.use('/api', router);




app.listen(port, () => {
    console.log("\napp is listening on port " + port);
});

















        



