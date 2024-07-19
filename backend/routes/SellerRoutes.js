const express = require("express");
const {
  getAllusers,
  registerController,
  loginController,
  createProperty,
  getSingleUser,
  deleteProperty,
  numberOfSave,
  deleteUser,
  getProp,
  numberOfViews,
  updateSeller,
} = require("../controller/SellerController.js");

const router = express.Router();

router.post("/register", registerController);

router.post("/login", loginController);

router.get("/get-Users", getAllusers);

router.post("/createproperty", createProperty);

router.post("/singleSeller", getSingleUser);

router.post("/deleteproperty", deleteProperty);

router.post("/save", numberOfSave);

router.post("/singleprop", getProp);

router.post("/view", numberOfViews);

router.post("/update", updateSeller);

router.post("/delete", deleteUser);
module.exports = router;
