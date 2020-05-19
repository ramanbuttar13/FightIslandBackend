const express = require("express");
const router = express.Router();
const usersController = require('../../controllers/users.controller')
/** create admin notes  */
router.post(
  "/login",
  usersController.login
);

module.exports = router;