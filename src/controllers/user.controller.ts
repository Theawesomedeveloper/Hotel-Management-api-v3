import * as dotenv from "dotenv";
dotenv.config();
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { Request, Response } from "express";

import userService from "../services/user.service";
import { userSchemaJoiOptional } from "../middlewares/validation.middleware";
import { User } from "../interfaces/user.interface";
import { Express } from "../interfaces/typings.interface";

const saltRounds = 10;

/**
 * @class
 */
class UserController {
  // create a user
  public async createUser(req: Request, res: Response): Promise<any> {
    const userData: User = req.body;

    // check if user with that email exists
    const existingUser = await userService.fetchOne({ email: userData.email });
    if (existingUser)
      return res.status(403).json({
        success: false,
        message: "User with that email already exists",
      });

    // hashing users password
    bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
      if (err) {
        return res.status(400).json({ success: false, message: err.message });
      }

      // saving it along side the hash in the database
      userData.password = hash;
      const createdUser: any = await userService.create(userData);

      // Generate JWT token
      const token: string = jwt.sign(
        { id: createdUser._id, role: createdUser.role },
        process.env.SECRET_KEY,
        { expiresIn: process.env.TOKEN_EXPIRES_IN }
      );

      // Authorizing user
      res

        .status(201)
        .cookie("rememberme", token, {
          expires: new Date(Date.now() + 86400000),
          httpOnly: true,
        })
        .json({
          success: true,
          token,
          message: "user created successfully",
          data: { email: createdUser.email, role: createdUser.role },
        });
    });
  }

  async fetchUser(req: any, res: Response) {
    const userData: User = req.body;

    // check if user with that email exists
    const foundUser: any = await userService.fetchOne({
      email: userData.email,
    });
    if (!foundUser)
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });

    // Check if password is correct
    const validPassword: boolean = await bcrypt.compare(
      userData.password,
      foundUser.password
    );

    if (!validPassword)
      return res.status(401).send("Invalid email or password.");

    // Generate JWT token
    const token = jwt.sign(
      { id: foundUser._id, role: foundUser.role },
      process.env.SECRET_KEY,
      { expiresIn: process.env.TOKEN_EXPIRES_IN }
    );

    res
      .status(200)
      .cookie("rememberme", token, {
        expires: new Date(Date.now() + 86400000),
        httpOnly: true,
      }) // set cookie to expire in one day
      .json({
        success: true,
        token,
        data: { email: foundUser.email, role: foundUser.role },
      });
  }

  async logoutUser(req: Request, res: Response) {
    res
      .status(200)
      .clearCookie("rememberme")
      .json({ success: true, message: "user logged out successfully" });
  }

  async updateUser(req: any, res: Response) {
    const userData: User = req.body;

    // check if user with that email exists
    if (userData.email) {
      const existingUser: any = await userService.fetchOne({
        email: userData.email,
      });
      if (existingUser)
        return res.status(403).json({
          success: false,
          message: "User with that email already exists",
        });
    }

    if (userData.password) {
      // hashing users password
      bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
        if (err) {
          return res.status(400).json({ success: false, message: err.message });
        }

        userData.password = hash;

        const updatedUser: any = await userService.update(
          { _id: req.user.id },
          userData
        );

        res.status(200).json({
          success: true,
          message: "user updated successfully",
          data: { email: updatedUser.email, role: updatedUser.role },
        });
      });
    }

    if (!userData.password) {
      const updatedUser = await userService.update(
        { _id: req.user.id },
        userData
      );
      res.status(200).json({
        success: true,
        message: "user updated successfully",
        data: { email: updatedUser.email, role: updatedUser.role },
      });
    }
  }
}

export default new UserController();
