function midlewar(req, res, next) {
  if (req.headers.token) {
    next();
  }
  return res.status(401).send({
    message: "You don't have access token",
  });
}

module.exports = { midlewar };