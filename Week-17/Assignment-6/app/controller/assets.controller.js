const Asset = require("../models/assets.model");

function createAsset(req, res) {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const assetData = new Asset({ ...req.body });

  Asset.create(assetData, (err, newAsset) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to create asset." });
    } else {
      res.status(201).send({
        message: "Successfully created an asset",
        newAsset: newAsset,
      });
    }
  });
}

function getAssetById(req, res) {
  const assetId = req.params.id;

  Asset.findById(assetId, (err, asset) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Asset with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Asset with id " + req.params.id,
        });
      }
    } else {
      res.send(asset);
    }
  });
}

function updateAsset(req, res) {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const assetId = req.params.id;

  Asset.findById(assetId, (err, asset) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Asset with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Asset with id " + req.params.id,
        });
      }
    }

    const assetData = new Asset({
      user_id: req.body.user_id || asset.user_id,
      type: req.body.type || asset.type,
      name: req.body.name || asset.name,
      value: req.body.value || asset.value,
    });

    Asset.update(assetId, assetData, (err, asset) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Asset with id ${req.params.id}.`,
          });
        } else {
          res.status(500).send({
            message: "Error updating Asset with id " + req.params.id,
          });
        }
      } else {
        res.send(asset);
      }
    });
  });
}

function deleteAsset(req, res) {
  const assetId = req.params.id;

  Asset.delete(assetId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Asset with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Asset with id " + req.params.id,
        });
      }
    } else {
      res.send({ message: `Asset was deleted successfully!` });
    }
  });
}

module.exports = {
  createAsset: createAsset,
  getAssetById: getAssetById,
  updateAsset: updateAsset,
  deleteAsset: deleteAsset,
};
