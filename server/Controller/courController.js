const database = require("../Config/mysql");

exports.select = (req, res) => {
  console.log(req.params.id_filiere);

  const selectQuery = "SELECT * FROM cour WHERE id_filiere = ?";

  database.query(selectQuery, [req.params.id_filiere], (error, result) => {
    if (error) res.status(503).json(error);

    res.status(201).json({ cours: result });
  });
};
