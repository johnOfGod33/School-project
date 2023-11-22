const bcrypt = require("bcrypt");
const database = require("../Config/mysql");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  console.log(req.body);
  bcrypt
    .hash(req.body.password, 8)
    .then((hash) => {
      const insertQuery = `INSERT INTO user (nom_user, prenom_user, dateDeNaissance_user, pays_user, email_user, password_user) VALUES (?,?,?,?,?,?)`;
      database.query(
        insertQuery,
        [
          req.body.nom,
          req.body.prenom,
          req.body.dateDeNaissance,
          req.body.pays,
          req.body.email,
          hash,
        ],
        (error, result) => {
          if (error) res.status(503).json(error);

          res
            .status(201)
            .json({ msg: "inscription reussi", result: result.insertId });
        }
      );
    })
    .catch((error) => {
      res.status(503).json(error);
    });
};

exports.signin = (req, res) => {
  console.log(req.body);
  const selectQuery = "SELECT * FROM user WHERE email_user = ?";

  database.query(selectQuery, [req.body.email], (error, result) => {
    if (error) res.status(503).json(error);

    if (result.length > 0) {
      bcrypt
        .compare(req.body.password, result[0].password_user)
        .then((valid) => {
          if (valid) {
            const token = jwt.sign(
              { ID: result[0].id_user },
              "project_site_v2",
              { expiresIn: "2h" }
            );
            res.status(201).json({ token, admin_user: result[0].admin_user });
          } else {
            res.status(403).json("mot de passe incorrect");
          }
        })
        .catch((error) => {
          res.status(503).json("echec de cryptage");
        });
    } else {
      res.status(403).json("email incorrect");
    }
  });
};
