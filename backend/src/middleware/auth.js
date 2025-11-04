const verifyToken = (req, res, next) => {
  const token = req.body || req.headers["authorization"];

  if (!token) {
    res.status(403).send({ success: false, message: "Token is required" });
  }
};
