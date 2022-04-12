const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./Router/index');

const app = express();

const port = 4567;
const hostname = 'localhost';

const localdb ='mongodb://127.0.0.1:27017/zomato';
const serverDB = 'mongodb+srv://zomata_db:TwaiJe5zEZw3wD70@cluster0.kpnqw.mongodb.net/ZOMATO_DB?retryWrites=true&w=majority';

app.use(cors());
app.use(express.json());
app.use('/', router);

mongoose.connect(serverDB,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        app.listen(port, hostname, () => {
            console.log(`Server is running at ${hostname}:${port}`);
        })
    })
    .catch(err => console.log(err));

