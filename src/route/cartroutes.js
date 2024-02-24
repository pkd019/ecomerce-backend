const cartRoutes =  require('express').Router();
const cartcontroller = require("../controller/cartcontroller");

cartRoutes.get('/get/:user', cartcontroller.getCard);
cartRoutes.post('/add', cartcontroller.addToCart);
cartRoutes.delete('/remove', cartcontroller.removeFromCart);

module.exports = cartRoutes;