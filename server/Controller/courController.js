const database = require("../Config/mysql");

exports.select = (req, res) => {
  console.log(req.params.id_filiere);

  const selectQuery =
    "SELECT cour.*, filiere.nom_filiere FROM cour JOIN filiere ON filiere.id_filiere = cour.id_filiere WHERE cour.id_filiere = ?";

  database.query(selectQuery, [req.params.id_filiere], (error, result) => {
    if (error) res.status(503).json(error);

    res.status(200).json({ cours: result });
  });
};
