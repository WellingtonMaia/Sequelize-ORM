const express = require('express');
const routes = require('./../routers/index');

const app = express();

const port = 3000;

routes(app);

app.listen(port, () => console.log(`running server at port ${port}`));

module.exports = app;