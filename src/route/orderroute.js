
const OrderRouter = require('express').Router();
const OrderController = require("../controller/ordercontroller");

OrderRouter.post('/createorder', OrderController.createOrder);
OrderRouter.delete('/deleteorder', OrderController.cancelOrder);
OrderRouter.get('/getorder', OrderController.getOrder);

module.exports = OrderRouter;
