const CatagoryRoutes = require('express').Router();
const catagorycontroller = require("./../controller/catagory_controller")

CatagoryRoutes.get('/searchcatagory', catagorycontroller.fetchCatagory);
CatagoryRoutes.get('/searchcatagory/:id', catagorycontroller.fetchCatagorybyId);

CatagoryRoutes.post('/createcatagory', catagorycontroller.createCatagory);
module.exports = CatagoryRoutes ;  