import * as dotenv from "dotenv"
dotenv.config()
import  jwt from "jsonwebtoken"
import  util from "util"
import { Request, Response, NextFunction } from "express"

// Middleware function for authentication
function authenticate(req: any, res: Response, next: NextFunction) {
  // const token = req.header('Authorization');
  // const token = req.header.authorization
  // const token = res.get('Authorization')
  // const token = req.header('x-auth-token')
  // boss you sef don see say i try

  try {

    const token =
      req.cookies.rememberme || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Access denied. you need to Login" });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    req.user = decoded;

    next();
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ success: false, message: "Session expired, you need to Login" });
  }
}

export default authenticate;
