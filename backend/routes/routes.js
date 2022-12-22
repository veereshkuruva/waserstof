const express = require('express');
const { getData,AddUser } = require('../controllers/usercontroller');
const userRoute = express.Router();



userRoute.get("/getdata",getData);
userRoute.post("/adduser",AddUser);

module.exports = userRoute ;