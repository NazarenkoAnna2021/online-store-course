require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models');
const cors = require('cors');
const router = require('./routes')

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

app.get('/', (req, resp) => {
    resp.status(200).json({massage: 'WORKING'});
});

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
    } catch (e) {
        console.log(e);
    };
};

start();