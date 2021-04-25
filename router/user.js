const express = require("express");
const router = express.Router();
const {
  Signup,
  SignIn,
  ShowUserInfos,
  ShowAllUsers,
  SaveJob,
  UploadResume,
} = require("../controllers/user");
const isAuth = require("../middlewares/auth_jwt");

const {
  registerValidation,
  signinValidation,
  validation,
} = require("../middlewares/user");
// route user (signin + signup)
router.post("/signup", registerValidation(), validation, Signup);
router.post("/signin", signinValidation(), validation, SignIn);
router.get("/current", isAuth, (req, res) => {
  res.send(req.user);
});
router.get("/profile", ShowUserInfos);
router.get("/users", ShowAllUsers);
router.put("/saveJob", SaveJob);
router.post("/uploadResume", UploadResume);

module.exports = router;
