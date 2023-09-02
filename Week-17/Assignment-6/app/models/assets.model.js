const mysql = require("../database/db");

class Asset {
  constructor(asset) {
    this.user_id = asset.user_id;
    this.type = asset.type;
    this.name = asset.name;
    this.value = asset.value;
  }

  static create(newAsset, result) {
    const { user_id, type, name, value } = newAsset;
    const query =
      "INSERT INTO Assets (user_id, type, name, value) VALUES (?, ?, ?, ?)";

    mysql.query(query, [user_id, type, name, value], (err, res) => {
      if (err) {
        result(err, null);
        return;
      }

      result(null, { id: res.insertId, ...newAsset });
    });
  }

  static findById(assetId, result) {
    const query = "SELECT * FROM Assets WHERE id = ?";

    mysql.query(query, assetId, (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      if (res.length) {
        result(null, res[0]);
        return;
      }

      // not found asset
      result({ kind: "notFound" }, null);
    });
  }

  static update(id, asset, result) {
    const query =
      "UPDATE Assets SET user_id = ?, type = ?, name = ?, value = ? WHERE id = ?";
    mysql.query(
      query,
      [asset.user_id, asset.type, asset.name, asset.value, id],
      (err, res) => {
        if (err) {
          result(null, err);
          return;
        }

        if (res.affectedRows === 0) {
          result({ kind: "not_found" }, null);
          return;
        }

        result(null, { id: id, ...asset });
      }
    );
  }

  static delete(assetId, result) {
    const query = "DELETE FROM Assets WHERE id = ?";

    mysql.query(query, [assetId], (err, res) => {
      if (err) {
        result(null, err);
        return;
      }

      if (res.affectedRows === 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      result(null, res);
    });
  }
}

module.exports = Asset;
