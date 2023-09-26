const Asset = require("../models/asset.model");

const addAsset = async (req, res) => {
  const asset = new Asset(req.body);
  try {
    const data = await asset.save();
    res.status(201).json({
      message: "new asset created",
      data: data,
    });
  } catch (err) {
    console.log("error", err);
  }
};

const getAssetById = async (req, res) => {
  try {
    const result = await Asset.findById(req.params.id);

    res.status(200).json({
      message: "successfully fetched user",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateAsset = async (req, res) => {
  try {
    const result = await Asset.findByIdAndUpdate(req.params.id, req.body, {
      useFindAndModify: false,
    });

    res.status(200).json({
      message: "successfully updated user",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteAsset = async (req, res) => {
  try {
    const result = await Asset.findByIdAndRemove(req.params.id, {
      useFindAndModify: false,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { addAsset, getAssetById, updateAsset, deleteAsset };
