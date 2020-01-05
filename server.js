'use strict'

require('dotenv/config');

const app = require('./bin/bin');
const mongo = require('./src/middlewares/connection');

app.listen(process.env.PORT || 3000, () => {
    mongo.connect();
    console.log('Running...');
});
