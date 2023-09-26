const express = require("express");
const assetController = require("../controller/assets.controller");

const router = express.Router();

router.post("/assets", assetController.createAsset);

router.get("/assets/:id", assetController.getAssetById);

router.put("/assets/:id", assetController.updateAsset);

router.delete("/assets/:id", assetController.deleteAsset);

module.exports = router;
