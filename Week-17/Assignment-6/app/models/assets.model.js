const mysql = require("../database/db");

class Asset {
  constructor(asset) {
    this.id = id;
    this.user_id = asset.userId;
    this.type = asset.type;
    this.name = asset.name;
    this.value = asset.value;
  }

  static create(assetData, callBack) {
    const { user_id, type, name, value } = assetData;
    const query =
      "INSERT INTO Assets (user_id, type, name, value) VALUES (?, ?, ?, ?)";

    mysql.query(query, [user_id, type, name, value], (err, results) => {
      if (err) {
        return callBack(err, null);
      }

      const newAsset = new Asset({
        id: results.id,
        user_id,
        type,
        name,
        value,
      });

      callBack(null, newAsset);
    });
  }

  static findById(assetId, callBack) {
    const query = "SELECT * FROM Assets WHERE id = ?";

    mysql.query(query, assetId, (err, results) => {
      if (err) {
        return callBack(err, null);
      }
      if (results.length === 0) {
        return callBack(null, null); // Asset not found
      }

      const assetData = results[0];
      const asset = new Asset(assetData);

      callBack(null, asset);
    });
  }

  update() {
    const query =
      "UPDATE Assets SET user_id = ?, type = ?, name = ?, value = ? WHERE id = ?";
    mysql.query(
      query,
      [this.user_id, this.type, this.name, this.value, this.id],
      (err, results) => {
        if (err) {
          return callback(err, null);
        }
        callback(null, results.affectedRows > 0);
      }
    );
  }

  static delete(assetId, callBack) {
    const query = "DELETE FROM Assets WHERE id = ?";

    mysql.query(query, [assetId], (err, results) => {
      if (err) {
        return callback(err, null);
      }

      callBack(null, results.affectedRows > 0);
    });
  }
}

module.exports = Asset;
