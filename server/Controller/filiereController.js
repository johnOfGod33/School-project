const database = require("../Config/mysql");

exports.select = (req, res) => {
  const selectQuery = `SELECT * FROM filiere`;
  database.query(selectQuery, (error, result) => {
    if (error) res.status(503).json(error);

    res.status(200).json({ filieres: result });
  });
};
