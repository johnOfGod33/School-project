const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];

    const verifyJwt = jwt.verify(token, "project_site_v2");

    req.body.ID = verifyJwt.ID;

    next();
  } catch (error) {
    res.status(401).json(error);
  }
};
