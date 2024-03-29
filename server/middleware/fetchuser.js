// const jwt = require("jsonwebtoken");
import jwt from 'jsonwebtoken'
const JWT_SECRET = "Hostel4>v7A";

const fillter = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    res.status(401).send({ status: "Token not found" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data;
    next();
  } catch (error) {
    res.status(401).send({ status: "Authenticate using correct token" })
  }
 
}
export default fillter
