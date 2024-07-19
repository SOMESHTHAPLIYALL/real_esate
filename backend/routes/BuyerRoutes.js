const express = require("express");
const {
  getAllusers,
  registerController,
  loginController,
  saveProperty,
  getSingleUser,
  deleteProperty,
  deleteUser,
  updateBuyer,
} = require("../controller/BuyerController.js");

const router = express.Router();

router.post("/register", registerController);

router.post("/login", loginController);

router.get("/get-Users", getAllusers);

router.post("/saveproperty", saveProperty);

router.post("/singleuser", getSingleUser);

router.post("/deleteproperty", deleteProperty);

router.post("/delete", deleteUser);

router.post("/updatebuyer", updateBuyer);
module.exports = router;
