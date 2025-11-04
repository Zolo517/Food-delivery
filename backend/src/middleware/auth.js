export const verifytoken = (req, res, next) => {
  const token = req.body || req.headers["authorization"];
  if(!token){
    res.status(403).send({message:"Token is required"})
  }

  try {
    
  } catch (error) {
    console.error(error, "error")
  }
};
