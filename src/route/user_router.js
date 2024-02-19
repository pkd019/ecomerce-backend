const router = require('express').Router();
const UserController = require("./../controller/user_controllere")
router.post('/createaccount', UserController.createAccount);
router.post('/signin', UserController.signin);
module.exports = router ; 