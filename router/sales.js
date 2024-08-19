const express = require("express");
const { salesController } = require("../controllers/salesController");
const router = express.Router();

router.get("/totalSalesOverTime", salesController.totalSalesOverTime)

module.exports = { router }