const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const app = express();
const db = require('./models');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"));

require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(port, function() {
    console.log('Listening on port' + port)
  })
})