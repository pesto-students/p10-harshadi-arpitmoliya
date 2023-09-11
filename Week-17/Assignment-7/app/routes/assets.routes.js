const express = require("express");
const assetController = require("../controller/asset.controller");

const router = express.Router();

router.post("/asset", assetController.addAsset);

router.get("/asset/:id", assetController.getAssetById);

router.put("/asset/:id", assetController.updateAsset);

router.delete("/asset/:id", assetController.deleteAsset);

module.exports = router;
