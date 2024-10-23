const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv').config("path");


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

app.use(cors());
const PORT = process.env.PORT | 3000;
(async()=>{
  try{
    await mongoose.connect(`mongodb+srv://pdas0354158:${process.env.MONGODB_PASSWORD}@cluster0.refnh83.mongodb.net/ecomerce?retryWrites=true&w=majority`);
    app.on("error",(e)=>{console.log("error",e)})

    app.listen(PORT, () => {
      console.log(`Your app connected to: ${PORT}`);
    });
    
  }
catch(e){
  console.log(e);
  throw e;
}})()
const UserRoutes = require("./route/user_router");
app.use('/api/user', UserRoutes);
 
const CatagoryRoutes = require("./route/catagory");
app.use('/api/catagory', CatagoryRoutes);

const ItemRoutes = require("./route/item");
app.use('/api/item', ItemRoutes);

const CartRoutes = require("./route/cartroutes");
app.use('/api/cart', CartRoutes);
 
const OrderRoute = require("./route/orderroute");
app.use('/api/order', OrderRoute);
 
