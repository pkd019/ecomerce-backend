const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://pdas0354158:Pkd019@cluster0.refnh83.mongodb.net/ecomerce?retryWrites=true&w=majority");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
const port = 4000;

app.listen(port, () => {
  console.log(`Your app connected to: ${port}`);
});

const UserRoutes = require("./route/user_router");

app.use('/api/user', UserRoutes);
 