const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const  connectTodb  = require('./db/db');
connectTodb();
const userRouter = require('./Routes/user.routes')
app.use('/users', userRouter);
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.send('hello world')
});

module.exports = app;