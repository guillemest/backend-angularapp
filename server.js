const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes/main-routes');
const db = require("./api/models");
const cors = require("cors");
const app = express();

const corsOptions = {
    origin: 'https://front-angularapp.rj.r.appspot.com',
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(routes);

db.sequelize.sync({
    force: false
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});