const controller = {
  getData(req, res) {
    return res.status(200).send("<h1>success</h1>");
  },
  postData(req, res) {
    const body = req.body;
    return res.status(200).send(body);
  }
}

module.exports = {
  controller,
};