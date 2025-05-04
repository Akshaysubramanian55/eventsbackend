const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json())
const connect = require('./db/config');

const userRoutes = require('./routes/userroutes');
app.use(userRoutes);

connect();


app.listen(process.env.PORT, () => {
    console.log(`server listening at http://localhost:${process.env.PORT}`);
  })