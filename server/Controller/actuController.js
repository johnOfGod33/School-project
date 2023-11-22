const database = require("../Config/mysql");

exports.select = (req, res) => {
  const selectQuery = "SELECT * FROM actu";
  database.query(selectQuery, (error, result) => {
    if (error) res.status(503).json(error);

    res.status(200).json({ actus: result });
  });
};

exports.selectdetails = (req, res) => {
  console.log(req.params);
  const selectQuery = "SELECT * FROM actu WHERE id_actu = ?";
  database.query(selectQuery, [req.params.id_actu], (error, result) => {
    if (error) res.status(503).json(error);

    res.status(200).json({ actus: result });
  });
};
