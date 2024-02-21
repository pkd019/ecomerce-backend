const ItemRouter = require('express').Router();
const itemcontroller = require("./../controller/item_controller");
ItemRouter.get('/searchitem', itemcontroller.fetchItem);
ItemRouter.get('/searchitem/catagory/:id', itemcontroller.fetchItembycatagoryId);

ItemRouter.post('/createitem', itemcontroller.createItem);

module.exports = ItemRouter;