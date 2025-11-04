export const verifytoken = (req, res, next) => {
  const token = req.body || req.headers["authorization"];
  if (!token) {
    res.status(403).send({ message: "Token is required" });
  }
  const BearerToken = token.split(" ")[1];

  try {
    const decoded = jwt.verify(BearerToken, "key");
    next();
  } catch (error) {
    console.error(error, "error");
  }
};
