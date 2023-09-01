const Asset = require("../models/assets.model");

function createAsset(req, res) {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const assetData = req.body;

  Asset.create(assetData, (err, newAsset) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to create asset." });
    }
    res.status(201).json({
      message: "Successfully created an asset",
      newAsset: newAsset,
    });
  });
}

function getAssetById(req, res) {
  const assetId = req.params.id;

  Asset.findById(assetId, (err, asset) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to fetch asset." });
    }
    if (!asset) {
      return res.status(404).json({ error: "Asset not found." });
    }
    res.status(200).json({ asset });
  });
}

function updateAsset(req, res) {
  const assetId = req.params.id;
  const updatedAssetData = req.body;

  Asset.findById(assetId, (err, asset) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to fetch asset." });
    }
    if (!asset) {
      return res.status(404).json({ error: "Asset not found." });
    }

    asset.user_id = updatedAssetData.user_id;
    asset.type = updatedAssetData.type;
    asset.name = updatedAssetData.name;
    asset.value = updatedAssetData.value;

    Asset.update((err, successful) => {
      if (err || !success) {
        console.error(err);
        return res.status(500).json({ error: "Failed to update asset." });
      }

      res.status(200).json({
        message: "Asset updated",
        updatedAsset: asset,
      });
    });
  });
}

function deleteAsset(req, res) {
  const assetId = req.params.id;

  Asset.delete(assetId, (err, success) => {
    if (err || !success) {
      console.error(err);
      return res.status(500).json({ error: "Failed to delete asset." });
    }

    res.status(204).json({
      message: "Asset deleted",
    });
  });
}

module.exports = {
  createAsset: createAsset,
  getAssetById: getAssetById,
  updateAsset: updateAsset,
  deleteAsset: deleteAsset,
};
