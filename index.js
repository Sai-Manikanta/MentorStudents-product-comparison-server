const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const productRouter = require('./routes/product');

const app = express();

mongoose.connect(process.env.DB_CONNECTION_STRING)
    .then(() => console.log('Connected to Database'))
    .catch(err => console.log(err.message));

app.use(cors());
app.use(express.json());

app.use('/products', productRouter);

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`server running at http://localhost:${port}`));