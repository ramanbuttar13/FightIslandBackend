const express = require("express");
const router = express.Router();
const usersController = require('../../controllers/users.controller')
const checkToken = require('../../middleware/auth').checkToken

/** create admin notes  */
router.post(
  "/login",
  usersController.login
);

// basic user stats, like total blogs, views, tags etc
// TODO: add more stats later
router.post(
  "/user-stats",
  checkToken,
  usersController.userStats
);

// list of blogs for a user by userId
router.post(
  "/user-blogs",
  checkToken,
  usersController.userBlogs
);

router.post(
  "/user-profile",
  checkToken,
  usersController.updateUserProfile
);



module.exports = router;